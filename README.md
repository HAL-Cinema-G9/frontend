# 環境構築

.envファイルは以下のように作成してください。
```
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXTAUTH_URL=
NEXT_PUBLIC_API_URL=
NEXTAUTH_SECRET=
```

- バージョン
  - node: v18.1.0
  - yarn: 1.22.17

nodeのバージョン管理は自由ですがnvmをおすすめします。

https://fumidzuki.com/knowledge/4533/

yarnを使用します
```bash
# yarnが入っていない方のみ
sudo npm install -g yarn
```

```bash
cd frontend

# パッケージインストール
yarn install

# 開発サーバ起動
yarn dev

# ビルド
yarn build

# ビルドサーバ起動
yarn start
```

※yarnが使えない場合はnpmでもよいです。
```bash
# パッケージインストール
npm i

# 開発サーバ起動
npm run dev

# ビルドサーバ起動
npm run build
npm run start
```