# スター付きGmailをEvernoteに転送するレシピ
IFTTTとGmailの連携が2019年3月で出来なくなったみたいなので自分用に作りました。

## 概要

Gmailでスターを付ける
↓
（IFTTT経由）
↓
自動でEvernoteに送信者・タイトル・日時が記録される

### サンプル

>★Gmail(starred): Fitbit <noreply@fitbit.com>「Fitbit から今週のアクティビティをお知らせします！」Tue Apr 02 2019 10:52:29 GMT+0900 (JST), >https://mail.google.com/mail/u/0/#inbox/xxxxxxxxxxxxxxxxx April 2, 2019 at 11:54PM

こんな感じでEvernoteに記録されます。
スターを付けたら記録される仕組み。
あのころどんな仕事してたっけ？がぱっと見てわかるものが作りたかった。

IFTTT経由なので、カスタマイズすればEvernoteだけでなく様々なものへ飛ばせます。
Slackへ飛ばすのはIFTTTも使わずもっと簡単に可能です！

## 使用サービス

-Gmail
-IFTTT(Webhooks)
-Evernote
-Google Apps Scripts

※Evernoteは有料プランである必要はありません。

## おおまかな流れ

1. IFTTTでWebhookとEvernoteを使えるようにします。
2. IFにWebhook、THENにEvernoteを入れてレシピを作ります。
3. IFTTTのWebhookのURLをメモします。
4. code.gsの中身をコピーしてGoogle Apps Scriptsのスクリプトエディタに貼り付けます。
5. 【ラベル名】や【WebhooksのURL】を自分用に変えてください。
6. gsを実行→IFTTTでchecknowを押す→Activityを確認する→Evernoteを確認する
7. Google Apps Script のトリガーを使って、時間で発動するように設定してください。

# 変更必須（2箇所）

Gmailでのラベル名とWebhooksのURLは自分用のものが必須です。

```
var userLabel = '★ラベル名★'; //Gmail上での処理済みラベル名

UrlFetchApp.fetch('★WebhooksのURL★', options); // webhooks url
```
