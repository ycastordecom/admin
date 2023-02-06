# admin

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

```
admin
├─ .VSCodeCounter
│  ├─ 2023-01-18_14-30-33
│  │  ├─ details.md
│  │  ├─ diff-details.md
│  │  ├─ diff.csv
│  │  ├─ diff.md
│  │  ├─ diff.txt
│  │  ├─ results.csv
│  │  ├─ results.json
│  │  ├─ results.md
│  │  └─ results.txt
│  └─ 2023-01-29_23-05-00
│     ├─ details.md
│     ├─ diff-details.md
│     ├─ diff.csv
│     ├─ diff.md
│     ├─ diff.txt
│     ├─ results.csv
│     ├─ results.json
│     ├─ results.md
│     └─ results.txt
├─ .env.development
├─ .env.production
├─ .eslintrc.js
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-applypatch
│  │  ├─ post-checkout
│  │  ├─ post-commit
│  │  ├─ post-merge
│  │  ├─ post-receive
│  │  ├─ post-rewrite
│  │  ├─ post-update
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-auto-gc
│  │  ├─ pre-commit
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate
│  │  ├─ update
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     └─ heads
│  │        └─ master
│  ├─ objects
│  │  ├─ 03
│  │  │  └─ c0c5d5ec302ed7b0ee2c401df9427fb9d3c117
│  │  ├─ 05
│  │  │  └─ 377588e0bec22d5ebde5552ec6c165e5b41bb8
│  │  ├─ 06
│  │  │  └─ 088b011eccebb820b6e8de0cd244aa443208ba
│  │  ├─ 07
│  │  │  └─ 36e108b1136a614da797d2343f7ed2c3863965
│  │  ├─ 10
│  │  │  └─ 0b11ff9b6d51d4f7849f576d758643199777ee
│  │  ├─ 14
│  │  │  ├─ 27cf62752646ad7217df0a61aa01fdef7475d1
│  │  │  └─ 73a0afce3c17bb52e86f7985d389de1f6a136d
│  │  ├─ 16
│  │  │  └─ 2a3ea97c29233aa898fa74630fde091e91680c
│  │  ├─ 18
│  │  │  └─ adfd3658fa0deeabd2fc067d4cea0766d7188d
│  │  ├─ 28
│  │  │  └─ 43d701e6846e04e596f953c1b3bc95a85ef041
│  │  ├─ 2b
│  │  │  └─ ff31b258bff0b9a04a74d6f16fc6db10a20c6f
│  │  ├─ 2e
│  │  │  ├─ 091d375b98c2d0e8bbf33afc7bc563f620a92c
│  │  │  └─ 380c03ab76f8bd5643b2e6c06fcfa6bae1fdc7
│  │  ├─ 2f
│  │  │  └─ 8c31e1e8781fa3376024ee55ae27c5d412b9c8
│  │  ├─ 38
│  │  │  └─ 04a43e2f31b64cd6468148621702f8af3c7858
│  │  ├─ 3b
│  │  │  └─ 37a43ae2fdef53050291d95da2e49f78cf398e
│  │  ├─ 3e
│  │  │  └─ 5a13962197105f2078d2a224cc57dfa09b4893
│  │  ├─ 3f
│  │  │  └─ a28070de24f2055171ca2e20543881cb7fdf1c
│  │  ├─ 40
│  │  │  ├─ 3adbc1e527906a4aa59558cd582c20bcd1d738
│  │  │  └─ 4e192a95ccccbede087203c42b1f25f6bc6e67
│  │  ├─ 42
│  │  │  └─ af00963d81b8e39a30435c60ac482d1f8756e0
│  │  ├─ 46
│  │  │  └─ ca04dee251a4fa85a2891a145fbe20cc619d96
│  │  ├─ 4a
│  │  │  └─ 928387a99eb9fc4e44118c4d99948385999771
│  │  ├─ 5f
│  │  │  └─ 2098ed27e2f2878de62894b6c3bc31d07c585f
│  │  ├─ 63
│  │  │  └─ e778d1e0e7a2673e4719e9a57865548b70f3f9
│  │  ├─ 65
│  │  │  └─ 10c6a45035b6573151ff6196e4bdea78deb75d
│  │  ├─ 72
│  │  │  └─ 845702c67beb58478fce730ef926cc1c36b3c4
│  │  ├─ 78
│  │  │  └─ 08237a18d4009501f950044f8388d13c5e1044
│  │  ├─ 79
│  │  │  ├─ 1e9c8c2c69ddb7be30cef2517dd6050b079cf0
│  │  │  └─ 1f62f2325462738ec7918f50da04ccb73b4cc0
│  │  ├─ 8c
│  │  │  └─ 93ef55c69f1423d5b9f8d40cb48f04a2082cf1
│  │  ├─ 9e
│  │  │  └─ 1c7d3f2143e92129a95c1c914c36a97afcbf88
│  │  ├─ b0
│  │  │  └─ 2aa64d97167ad649e496908b35f14c603d9249
│  │  ├─ b7
│  │  │  └─ e27a1d39a99ba641da4d885df6bf989b5d9463
│  │  ├─ c3
│  │  │  └─ 48c414cdcaa4cfbf7bc2724168806e90f62404
│  │  ├─ c5
│  │  │  └─ 00769e3df9d6a6f1977ace8be4e63a8095e36a
│  │  ├─ cf
│  │  │  └─ 10a5602e653bb126332934e2b7f34081c19a01
│  │  ├─ df
│  │  │  └─ 36fcfb72584e00488330b560ebcf34a41c64c2
│  │  ├─ e4
│  │  │  └─ 4c0d5b0ff35e7facaed6353e0be801d4f3b10d
│  │  ├─ e5
│  │  │  └─ 84011d5a3fd39cb49a4aff35508e6346562e11
│  │  ├─ eb
│  │  │  └─ 0536286f3081c6c0646817037faf5446e3547d
│  │  ├─ f2
│  │  │  └─ 4d454a2ecb8851bb893192b64ee09386d30e24
│  │  ├─ f3
│  │  │  └─ d2503fc2a44b5053b0837ebea6e87a2d339a43
│  │  ├─ f7
│  │  │  └─ 52b63075da02eae9e8a8f722d22cc05155cd92
│  │  ├─ fc
│  │  │  └─ fc7fc7071497e9233bc6c99b9612bd508f1fe7
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ master
│     └─ tags
├─ .gitignore
├─ .prettierrc.js
├─ README.md
├─ babel.config.js
├─ mock
│  ├─ index.ts
│  ├─ menus.ts
│  └─ page
│     └─ index.ts
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ img
│  │  └─ icons
│  │     ├─ android-chrome-192x192.png
│  │     ├─ android-chrome-512x512.png
│  │     ├─ android-chrome-maskable-192x192.png
│  │     ├─ android-chrome-maskable-512x512.png
│  │     ├─ apple-touch-icon-120x120.png
│  │     ├─ apple-touch-icon-152x152.png
│  │     ├─ apple-touch-icon-180x180.png
│  │     ├─ apple-touch-icon-60x60.png
│  │     ├─ apple-touch-icon-76x76.png
│  │     ├─ apple-touch-icon.png
│  │     ├─ favicon-16x16.png
│  │     ├─ favicon-32x32.png
│  │     ├─ msapplication-icon-144x144.png
│  │     ├─ mstile-150x150.png
│  │     └─ safari-pinned-tab.svg
│  ├─ index.html
│  └─ robots.txt
├─ src
│  ├─ App.vue
│  ├─ api
│  │  ├─ axios.ts
│  │  ├─ index.ts
│  │  ├─ menus.ts
│  │  ├─ page
│  │  │  ├─ goods.ts
│  │  │  ├─ index.ts
│  │  │  ├─ login.ts
│  │  │  ├─ order.ts
│  │  │  └─ user.ts
│  │  └─ request.ts
│  ├─ assets
│  │  ├─ Announcement.png
│  │  ├─ Group@3x.png
│  │  ├─ fk@3x.png
│  │  ├─ frozen.png
│  │  ├─ kamibg.png
│  │  ├─ login_left.png
│  │  ├─ makeUp.png
│  │  ├─ message.png
│  │  ├─ more@3x.png
│  │  ├─ pay.png
│  │  ├─ qr.png
│  │  ├─ recommend.png
│  │  ├─ scss.png
│  │  ├─ shopclass.png
│  │  └─ subicon.png
│  ├─ components
│  │  ├─ good
│  │  │  ├─ addSpecifications.module.css
│  │  │  ├─ addSpecifications.module.less
│  │  │  ├─ addSpecifications.tsx
│  │  │  ├─ editgood.module.css
│  │  │  ├─ editgood.module.less
│  │  │  ├─ editgood.tsx
│  │  │  ├─ goodSpecificationsTable.css
│  │  │  ├─ goodSpecificationsTable.module.less
│  │  │  └─ goodSpecificationsTable.tsx
│  │  ├─ header.vue
│  │  ├─ index
│  │  │  ├─ close.module.css
│  │  │  ├─ close.module.less
│  │  │  ├─ close.tsx
│  │  │  ├─ feedback.module.css
│  │  │  ├─ feedback.module.less
│  │  │  ├─ feedback.tsx
│  │  │  ├─ makeUpCollection.module.css
│  │  │  ├─ makeUpCollection.module.less
│  │  │  ├─ makeUpCollection.tsx
│  │  │  ├─ message.module.css
│  │  │  ├─ message.module.less
│  │  │  └─ message.tsx
│  │  ├─ kami
│  │  │  ├─ addPopWindow.module.css
│  │  │  ├─ addPopWindow.module.less
│  │  │  └─ addPopWindow.tsx
│  │  ├─ menu-item.vue
│  │  ├─ menus.vue
│  │  ├─ order
│  │  │  ├─ orderDetails.module.css
│  │  │  ├─ orderDetails.module.less
│  │  │  ├─ orderDetails.tsx
│  │  │  ├─ orderEdit.module.css
│  │  │  ├─ orderEdit.module.less
│  │  │  └─ orderEdit.tsx
│  │  ├─ publicity
│  │  │  ├─ time.module.css
│  │  │  ├─ time.module.less
│  │  │  └─ time.tsx
│  │  ├─ shop
│  │  │  ├─ shopSubmit.module.css
│  │  │  ├─ shopSubmit.module.less
│  │  │  └─ shopSubmit.tsx
│  │  └─ user
│  │     ├─ edit.module.css
│  │     ├─ edit.module.less
│  │     └─ edit.tsx
│  ├─ hooks
│  │  ├─ MerchandiseClassList.ts
│  │  ├─ index.ts
│  │  └─ useMerchandiseList.ts
│  ├─ main.ts
│  ├─ registerServiceWorker.ts
│  ├─ router
│  │  └─ index.ts
│  ├─ shims-vue.d.ts
│  ├─ store
│  │  ├─ index.ts
│  │  └─ modules
│  │     └─ user.ts
│  ├─ type
│  │  ├─ image.d.ts
│  │  ├─ index.d.ts
│  │  ├─ menus.d.ts
│  │  └─ page
│  │     ├─ Merchandise.d.ts
│  │     ├─ api.d.ts
│  │     ├─ index.d.ts
│  │     ├─ login.d.ts
│  │     ├─ order.d.ts
│  │     └─ user.d.ts
│  ├─ utils
│  │  └─ index.ts
│  └─ views
│     ├─ Home.vue
│     ├─ Index.vue
│     ├─ KamiList 2.vue
│     ├─ KamiList.vue
│     ├─ Login.vue
│     ├─ Merchandise.vue
│     ├─ MerchandiseAdd.vue
│     ├─ MerchandiseClassAdd.vue
│     ├─ MerchandiseClassList.vue
│     ├─ MerchandiseList.vue
│     ├─ Order.vue
│     ├─ OrderList.vue
│     ├─ Publicity.vue
│     ├─ Register.vue
│     ├─ Shop.vue
│     ├─ ShopLink.vue
│     ├─ ShopSetup.vue
│     ├─ ShopSubmit.vue
│     ├─ Uppwd.vue
│     ├─ User.vue
│     └─ UserMy.vue
├─ tsconfig.json
├─ vite.config.ts
└─ yarn.lock

```
