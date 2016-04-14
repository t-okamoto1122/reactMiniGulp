# reactMiniGulp

#参照ページ
http://qiita.com/cortyuming/items/9e7c30224ff3e4671019

#用意するファイルは４つ

    package.json(npm install の時にみるやつ)
    gulpfile.js (←npm run react 変換内容を記述)
    index.html
    jsx/helloworld.jsx



#動かす手順
    1.$ npm install
    2.最初だけjsファイルを作成するため $ npm run react で jsx を変換する
    3.$ npm run watch で web ブラウザに表示、かつファイル変更を監視して変更あればjsxを変換してライブリロードされる

jsxは、jsxファイル内に書いたhtml(jsxのコード)などを、React.createElement()文などに変換してくれる
