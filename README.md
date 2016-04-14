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

#props 
    Messageコンポーネントはmessageという値を持ちますが、その値は親であるAppコンポーネントが
    Stateで管理しています。親から子に対して値を渡す必要がある。そのインターフェースがコンポーネントタグの属性(message={this.state.message})。
    Message側は属性で受け渡された値をReactコンポーネントのProps(プロパティ)という仕組みで参照できる。
    this.props.messageがPropsによる値の参照。
    親から子のインターフェースは属性を通じてアクセスするということ。
