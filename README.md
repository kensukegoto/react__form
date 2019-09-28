# api call

- h4
  - text
- p
  - text
- time
  - text
- url
  - text
- li_01 ~ (追加出来る)
  - text
- tmb
  - file


## 'CREATE_EVENT'

- /api/add
- POST
- アイテムを新規追加

## 'UPDATE_EVENT'

- /api/update:id
- UPDATE
-　該当のアイテムを更新

## 'DELETE_EVENT'

- API側で未実装（忘れてた）

# redux

イベント一覧を管理する（※コンポーネント間のデータの共有。変化に応じた再描画。）

# install

- react-router-dom
- redux
- react-redux
- redux-thunk
- redux-devtools-extension
- lodash
- axios

# 参考

- [【React】axiosを使用してmultipart/form-data形式の通信をする](http://reiji1020.hatenablog.com/entry/2018/12/31/113202)
- [FormDataの一部機能はIEに対応していない](https://caniuse.com/#search=FormData)