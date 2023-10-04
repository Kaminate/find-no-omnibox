# So you want to type "find" in the omnibox
- https://github.com/brandon1024/find/issues/312
- https://github.com/brandon1024/find/issues/345

# Build steps (Chrome, Windows 10):
1) Checkout this repository/download zip/whatever.  
    > (optional) Edit manifest.json line 49 omnibox keyword to whatever you want (I used `find+`)
    > (optional) Double-click build.sh (it doesn't work)  
    > (optional) Shift+right-click the directory to "open Linux shell here" (it doesn't work either)  
1) Install Ubuntu (https://learn.microsoft.com/en-us/windows/wsl/install) by opening powershell and entering `wsl --install`
1) shift+right-click the directory to "open Linux shell here" (it works).  
   Alternately, run the Ubuntu app that you now have, and `cd /mnt/c/Users/Nate/Desktop/find-no-omnibox-develop` or wherever you have the folder
    > (optional) Run `./build.sh`. (it doesn't work)
1) Run `./build.sh -m manifest.json -v 1.4.4 -o build`.  
    If you get the error
    ```cmd
    ./build.sh: line 2: $'\r': command not found
    ./build.sh: line 8: $'\r': command not found
    ./build.sh: line 10: syntax error near unexpected token `$'{\r''
    '/build.sh: line 10: `function help() {
    ```
    You can fit it by changing `build.sh`'s line endings
    ```
    vim build.sh
    :set ff=unix
    :wq!
    ```
1) Hopefully it works for you now.
1) Go to Chrome `chrome://extensions/` and press the `Load Unpacked` button
1) Try directories until one works (`C:\Users\Nate\Desktop\find-no-omnibox-develop\build\chr` worked)
    > (optional) Try the extension. Does it work? Sort of, but the ctrl+shift+f hotkey is broken.   
    > Theorize that there's something wrong with having two of the same extension installed.
1) Uninstall the old `find+` extenion.
1) Done!
