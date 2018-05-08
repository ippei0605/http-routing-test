# IBM Cloud CF HTTP Routing Test

## 準備
1. ログインする。

    ```
    npm run login
    ```

1. プッシュする

    ```
    npm run push
    ```

1. スケールする。 (3インスタンス, 32MBメモリ)

    ```
    npm run scale
    ```

1. 確認する。

    ```
    npm run show
    ```

## テスト
* インスタンス#0 のホスト名を表示する。

    ```
    npm run inst0
    ```

* インスタンス#1 のホスト名を表示する。

    ```
    npm run inst1
    ```

* インスタンス#2 のホスト名を表示する。

    ```
    npm run inst2
    ```

## まとめ
* GUID が分かれば HTTPヘッダーに X-CF-APP-INSTANCE を設定することで、特定インスタンスにアクセスすることができる。
* GUID はアプリを最初に作成 (コンソール)、または、プッシュ (bx コマンド) した時に決まる。

## 備考
* Restage しても GUID は変わらない。

    ```
    bx app restage http-routing-test-ippei
    ```

* ホスト名は起動する度に変わる。

## 参考資料
* https://docs.cloudfoundry.org/concepts/http-routing.html#app-instance-routing