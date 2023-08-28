# You know why you're here 
### (you want to be able to type "find" in the omnibox)
- https://github.com/brandon1024/find/issues/312
- https://github.com/brandon1024/find/issues/345

# Build steps (Chrome, Windows 10):
1) Checkout this repository/download zip/whatever.
2) (optional) Edit manifest.json line 49 omnibox keyword to whatever you want
3) (optional) Double-click build.sh (it doesn't work)
4) (optional) Shift+right-click the directory to "open Linux shell here" (it doesn't work either)
5) Install Ubuntu (https://learn.microsoft.com/en-us/windows/wsl/install) by opening powershell and entering `wsl --install`
6) shift+right-click the directory to "open Linux shell here" (it works). Alternately, run the Ubuntu app that you now have, and `cd /mnt/c/Users/Nate/Desktop/find-no-omnibox-develop` or wherever you have the folder
7) Run `./build.sh -m manifest.json -v 1.4.4 -o build`. Hopefully it works for you now.
8) Go to Chrome `chrome://extensions/` and press the `Load Unpacked` button
9) Try directories until one works (`C:\Users\Nate\Desktop\find-no-omnibox-develop\build\chr`)
10) (optional) Try the extension. Does it work? (sort of, but the hotkey ctrl+shift+f is broken). Theorize that there's something wrong with having two of the same extension installed.
11) Uninstall the old `find+` extenion.
12) It works!

