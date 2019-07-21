import { override } from '@microsoft/decorators';
import {
  BaseApplicationCustomizer, PlaceholderContent, PlaceholderName
} from '@microsoft/sp-application-base';

import * as strings from 'SpaBootstrapApplicationCustomizerStrings';

export interface ISpaBootstrapApplicationCustomizerProperties {
  testMessage: string;
}

export default class SpaBootstrapApplicationCustomizer
  extends BaseApplicationCustomizer<ISpaBootstrapApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {

    const placeholder: PlaceholderContent = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top);

    var element = document.createElement('app-root');
    placeholder.domElement.appendChild(element);

    let js = document.createElement('script');
    js.setAttribute('src','https://localhost:4321/temp/my-dream-app/polyfills-es2015.4d31cca2afc45cfd85b5.js');
    js.setAttribute('type','module');
    document.body.appendChild(js);

    js = document.createElement('script');
    js.setAttribute('src','https://localhost:4321/temp/my-dream-app/polyfills-es5.2219c87348e60efc0076.js');
    js.setAttribute('nomodule', 'true');
    document.body.appendChild(js);

    js = document.createElement('script');
    js.setAttribute('src','https://localhost:4321/temp/my-dream-app/runtime-es2015.703a23e48ad83c851e49.js');
    js.setAttribute('type','module');
    document.body.appendChild(js);

    js = document.createElement('script');
    js.setAttribute('src','https://localhost:4321/temp/my-dream-app/runtime-es5.465c2333d355155ec5f3.js');
    js.setAttribute('nomodule', 'true');
    document.body.appendChild(js);

    js = document.createElement('script');
    js.setAttribute('src','https://localhost:4321/temp/my-dream-app/main-es2015.1cc79820d80bc887a16f.js');
    js.setAttribute('type','module');
    document.body.appendChild(js);

    js = document.createElement('script');
    js.setAttribute('src','https://localhost:4321/temp/my-dream-app/main-es5.3385d48f1e21910da74e.js');
    js.setAttribute('nomodule', 'true');
    document.body.appendChild(js);

    return Promise.resolve();
  }
}
