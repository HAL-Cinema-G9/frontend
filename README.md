# 環境構築

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