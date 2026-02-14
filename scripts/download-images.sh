#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ASSETS_DIR="$ROOT_DIR/assets/images"

if [[ ! -d "$ASSETS_DIR" ]]; then
  echo "Missing folder: $ASSETS_DIR"
  exit 1
fi

missing=0
for file in \
  1UeeOLI3GjLJhLaTyJVlvsrChPc.png \
  RXIMYDftcHgJG15gDq7Ik0G3OMw.jpg \
  VAmRI11oKLfXUxqdr7eOpeA2oY.png \
  IJkn3YbayGQs24KKfZvxpQw78cI.png \
  ittXMFOVKTBf2VTiLlrze7MsM8.png \
  ESBeomc4hJXYVRsNlBAkqqhYew.png \
  4AA9D1uE5y5kLJXuxabi83bCSIU.png \
  wlFxhNleaGRD6hVfpoHiPYVU.png \
  I8dy3QBZGrA8BgEcJUhUpIycVQ.png \
  w6gbhh1mr96AmdXqd31PbXoK0.png \
  5ayxlSchxftRrRC0LDQTF0aZbZA.png \
  SWQ1ApOTGB0Cj2SUPfNpOiL8fbY.png \
  EfqAiTW708Azt8Td6SqkYvYSTs.png \
  HBkNADdfyxGjHNokh25Le2lCoc.png
 do
  if [[ ! -f "$ASSETS_DIR/$file" ]]; then
    echo "Missing image: $file"
    missing=1
  fi
 done

if [[ "$missing" -eq 1 ]]; then
  echo "Some local images are missing."
  exit 1
fi

echo "All local images are present in $ASSETS_DIR"
