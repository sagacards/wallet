[![Telegram](https://img.shields.io/badge/Live_Support-2CA5E0?style=flat&logo=telegram&logoColor=white)](https://t.me/earthwallet)
[![Discord](https://img.shields.io/badge/Developers-%237289DA.svg?style=flat&logo=discord&logoColor=white)](https://discord.gg/aemgEpMye3)
[![Twitter](https://img.shields.io/badge/Updates-%231DA1F2.svg?style=flat&logo=Twitter&logoColor=white)](https://twitter.com/earthwallet)
[![Docs](https://img.shields.io/badge/Documentation-2CA5E0?color=success)](https://docs.earthwallet.io)
![License](https://img.shields.io/badge/Code-MIT%20Licence-blueviolet)


![Earth Wallet](https://i.imgur.com/eIZaUbx.png)

Earth Wallet is a self custody digital asset wallet built for the next generation of Web3. Designed and developed from the ground up to make the transition to new blockchain protocols like the internet computer and reduce the environmental impacts of Proof-of-Work blockchains.

# Download it Here:

| [![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](https://chrome.google.com/webstore/detail/earth-wallet/agkfnefiabmfpanochlcakggnkdfmmjd?hl=en&authuser=1) | [![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](https://chrome.google.com/webstore/detail/earth-wallet/agkfnefiabmfpanochlcakggnkdfmmjd?hl=en&authuser=1) | [![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png)](https://chrome.google.com/webstore/detail/earth-wallet/agkfnefiabmfpanochlcakggnkdfmmjd?hl=en&authuser=1) | [![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](https://chrome.google.com/webstore/detail/earth-wallet/agkfnefiabmfpanochlcakggnkdfmmjd?hl=en&authuser=1) | [![Yandex](https://raw.github.com/alrra/browser-logos/master/src/yandex/yandex_48x48.png)](https://chrome.google.com/webstore/detail/earth-wallet/agkfnefiabmfpanochlcakggnkdfmmjd?hl=en&authuser=1) | [![Brave](https://raw.github.com/alrra/browser-logos/master/src/brave/brave_48x48.png)](https://chrome.google.com/webstore/detail/earth-wallet/agkfnefiabmfpanochlcakggnkdfmmjd?hl=en&authuser=1) | [![vivaldi](https://raw.github.com/alrra/browser-logos/master/src/vivaldi/vivaldi_48x48.png)](https://chrome.google.com/webstore/detail/earth-wallet/agkfnefiabmfpanochlcakggnkdfmmjd?hl=en&authuser=1) |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 49 & later ✔                                                                                  | 52 & later ✔                                                                                     | 36 & later ✔                                                                               | 79 & later ✔                                                                            | Latest ✔                                                                                      | Latest ✔                                                                                   | Latest ✔                                                                                         |

## 🎉 Now in Beta with over 20,000 users!

We are still in Beta, so please remember to backup your keys and don't store large amounts as there may be breaking changes or bugs discovered during future audits and bug bounties. Early beta testers and community may receive exclusive NFT and token drops so [join our Community Chat](https://t.me/earthwallet), or if you are looking for a full time role please [join the Earth DAO](https://discord.gg/aemgEpMye3) and let us know!

:white_check_mark: Self Custody (your keys, your crypto) <br/>
:white_check_mark: 100% Open Source <br/>
:white_check_mark: Decentralized App Developer SDK <br/>
:white_check_mark: Internet Computer Protocol Support <br/>
:white_check_mark: Bitcoin and other multichain support <br/>
:white_check_mark: Energy efficient NFT support and marketplace <br/>
:white_check_mark: Earth Connect (Developer SDK) <br/>
:black_square_button: Core Security Audits (Q4) <br/>
:black_square_button: Core Code Freeze (Q4/Q1) <br/>
:black_square_button: Earth Protocol (🙊)

## 🌎 Earth Connect - Build Apps on the Internet Computer with Earth Wallet

Looking to build on the Internet Computer? Earth Wallet enables develoeprs to build applications that are easy and secure. This gives both you and your users the peace of mind that their private keys are not exposed to applications, and lets them decide which dapps to sign into. To learn more:

[Check out the documentation](docs.earthwallet.io)

## 🚀 Auditors / Bug Hunters - $10k USD+ Available!!

We have an on going bug bounty campaign for $10,000 USD, as well as full time positions available. If you find a bug, or simply have an idea of how to make the code better/faster/more secure, please [join our Developer Server](https://discord.gg/aemgEpMye3). Help create the most secure open source digital asset wallet and own a piece the future!

To get started, ensure you have:

- [Node.js](https://nodejs.org) 10 or later installed
- [Yarn](https://yarnpkg.com) v1 or v2 installed

Then run the following:

- `yarn install` to install dependencies.
- `yarn run dev:chrome` to start the development server for chrome extension
- `yarn run dev:firefox` to start the development server for firefox addon
- `yarn run dev:opera` to start the development server for opera extension
- `yarn run build:chrome` to build chrome extension
- `yarn run build:firefox` to build firefox addon
- `yarn run build:opera` to build opera extension
- `yarn run build` builds and packs extensions all at once to extension/ directory

### Running Locally

- `yarn install` to install dependencies.
- To watch file changes in development

  - Chrome
    - `yarn run dev:chrome`
  - Firefox
    - `yarn run dev:firefox`
  - Opera
    - `yarn run dev:opera`

- **Load extension in browser**

- ### Chrome

  - Go to the browser address bar and type `chrome://extensions`
  - Check the `Developer Mode` button to enable it.
  - Click on the `Load Unpacked Extension…` button.
  - Select your extension’s extracted directory.

- ### Firefox

  - Load the Add-on via `about:debugging` as temporary Add-on.
  - Choose the `manifest.json` file in the extracted directory

- ### Opera

  - Load the extension via `opera:extensions`
  - Check the `Developer Mode` and load as unpacked from extension’s extracted directory.

### Build and Install the Extension

- `yarn run build` builds the extension for all the browsers to `extension/BROWSER` directory respectively.

Note: By default the `manifest.json` is set with version `0.0.0`. The webpack loader will update the version in the build with that of the `package.json` version. In order to release a new version, update version in `package.json` and run script.

# ♾️ Contributors

The best way to submit feedback and report bugs is to [open a GitHub issue](https://github.com/earth-association/wallet/issues/new).
If you want to contribute code please join our [Developer Server](https://discord.gg/gmgPCBnvJd).

Thanks to all the people who contribute!

# 🈚 License

Earth Wallet is available under the MIT license. See the [LICENSE](LICENSE) file for more info.
