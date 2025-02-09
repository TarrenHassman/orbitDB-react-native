# Getting Started

## Installation
1. Clone the repository
2. Install dependencies
   ```bash
   npm install
   ```
3. *iOS only*
   ```bash
   bundle install
   ```
4. Run the app
   ```bash
   npx expo run:ios
   ```
   ```bash
   npx expo run:android
   ```

# Non-Federated

Federated systems are the equivalent of republics.

Considering our current situation in relation to republics I would hope you could understand why I do not consider them to be an ideal system.

I believe all individuals should be able to participate fully in the network easily with what they have (It is not uncommon to not have a laptop let alone a powerful desktop computer)


# Crypto

Using crypto wallets as authentication allow a divestment from major corporations like Google, Meta, and Apple

Participation in cryptocurrency is not a requirement.

The wallets function are for account verification, post signing, etc.

# Polyfill

Libp2p and Helia rely on packages not available on browsers.

Polyfills are handled in the metro.config.js and bable.config.js

metro.config.js handles loading packages

bable.config.js handles aliases

# Attributions
Cyberfly.io - Setting up Polyfills to replace the previous method of just bundling up an entire nodejs enviroment

# Roadmap

## Phase 1

Initial Social media
   Video upload
   Video Feed
   Comment and like system
   Accounts
   Recomendation system
   Filters / Blocking

## Phase 2

Creator Monetization
   Donation button on videos
   Ad system and payout
   Selling physical and digital goods
   (TBD: Stripe Integration for US cash payments)
   (*I have code for adding stripe connect systems but currently that requires a central server, business front,etc.*) (*Business side would be established as a non-profit*)

# TODO
Integrate Crypto Wallet authentication

Add Bottom Navigation bar

Add web support / Responsive / Adaptive Design

Setup git issue pipeline

Setup task tracker // task communication

Setup Design pipeline (Canva / Figma Graphics and designs)

Create Official Roadmap

# Learn More

## FrontEnd
To learn more about React Native, take a look at the following resources:
- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

## Backend
To learn more about Helia and IPFS(Networking and implementation):
   https://ipfs.tech/
   https://github.com/ipfs/helia

To learn about interoperability between IPFS and other CID networks:
   https://ipld.io/docs/

To learn about the differences between IPLD and ATProtocol(Bluesky):
   https://atproto.com/specs/data-model

To learn more about orbitDB (The database built on top of IPFS):
   https://github.com/orbitdb/orbitdb

To learn more about libp2p(Networking IPFS is built on top of):
   https://libp2p.io/