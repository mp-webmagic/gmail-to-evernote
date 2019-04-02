# スター付きGmailをEvernoteに転送するレシピ
IFTTTとGmailの連携が2019年3月で出来なくなったみたいなので自分用に作りました。

## 使用サービス
-Gmail
-IFTTT(Webhook)
-Evernote
-Google Apps Scripts

※Evernoteは有料プランである必要はありません。

## おおまかな流れ

1. IFTTTでWebhookとEvernoteを使えるようにします。
2. IFにWebhook、THENにEvernoteを入れてレシピを作ります。
3. IFTTTのWebhookのURLをメモします。
4. code.gsの中身をコピーしてGoogle Apps Scriptsのスクリプトエディタに貼り付けます。
5. 【ラベル名】や【WebhookのURL】を自分用に変えてください。
6. gsを実行→IFTTTでchecknowを押す→Activityを確認する→Evernoteを確認する
