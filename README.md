## Attempt to use Angular with the SharePoint Framewrok

#### This is experimental and I have never used in produciton

### Prerequisites

- Angular CLI installed
- SharePoint Frameowrk developement setup done

#### How to make it work

- Open command line
- Go to the project dir

```
cd angluarcli-app/my-dream-app
npm i
ng build --prod --output-path "../../spfx-spa-bootstrap-customizer/temp/my-dream-app"
cd ../../spfx-spa-bootstrap-customizer
npm i
gulp serve
```

In case you do not see the angular logo when you are testing the app customizer. Open the SpaBootstrapApplicationCustomizer.ts and compare the hashes of the JavaScript file with those in the `temp/my-dream-app` folder.

### Known issues

- Some polyfills conflict with the one loaded form the SPFx (but the SPFx does not support Angular at first place so this is not a suprise)
- I could not make it work in IE11 even with target set to es5. Again the polifils fail to load properly. This can be fixed with enoght tries, I tested it just for 15 mins.
