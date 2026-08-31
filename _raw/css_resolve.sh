#!/bin/bash
# For each local CSS file, resolve its url() refs to absolute origin URLs
> _raw/css_abs_urls.txt
find assets -type f \( -name '*.css' -o -name '*.cm' \) | while read -r f; do
  host=$(printf '%s' "$f" | sed -E 's|^assets/([^/]+)/.*|\1|')
  dir=$(dirname "${f#assets/$host}")
  grep -ohE 'url\(["'"'"']?[^)"'"'"']+' "$f" 2>/dev/null | sed -E 's/^url\(["'"'"']?//' | while read -r u; do
    case "$u" in
      data:*|http:*|https:*|"") continue ;;
      //*) echo "https:$u" >> _raw/css_abs_urls.txt ;;
      /*)  echo "https://$host$u" >> _raw/css_abs_urls.txt ;;
      *)   # relative - normalize dir/u
           full="$dir/$u"
           norm=$(printf '%s' "$full" | awk -F/ '{n=0; for(i=1;i<=NF;i++){ if($i==".."){if(n>0)n--} else if($i!="."&&$i!=""){a[++n]=$i} } s=""; for(i=1;i<=n;i++) s=s"/"a[i]; print s}')
           echo "https://$host$norm" >> _raw/css_abs_urls.txt ;;
    esac
  done
done
sort -u _raw/css_abs_urls.txt -o _raw/css_abs_urls.txt
