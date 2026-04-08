import type { Translation } from '../types';

const jp: Translation = {
  nav: {
    projects: 'プロジェクト',
    expertise: '専門分野',
    about: '私について',
  },
  hero: {
    title: 'ソフトウェアエンジニア & ウェブデザイナー',
    description:
      '東京を拠点とするデジタルクラフトマン。洗練されたインターフェースから強力なシステムまで、高性能なウェブソリューションを提供します。',
    eyebrow: 'お仕事受付中 · 東京',
    ctaProjects: 'プロジェクトを見る',
    ctaContact: 'お問い合わせ',
    statProjects: 'プロジェクト',
    statStack: 'スタック',
    statStackValue: 'Go · Python · TypeScript',
    statBased: '拠点',
    statBasedValue: '東京',
  },
  section: {
    title: '最新のプロジェクト',
    viewAll: 'すべてのプロジェクト',
    coopCta: '大きなプロジェクトをお持ちですか？',
  },
  featured: {
    label: '注目 · ウェブデザイン',
    viewProject: 'プロジェクトを見る',
  },
  footer: {
    softwareEngineer: 'Software Engineer',
  },
  projects: {
    title: 'プロジェクト',
    subtitle: 'ポートフォリオ',
    eyebrow: 'ポートフォリオ',
    description:
      '各プロジェクトはユニークな課題と革新的なソリューションを表しています。',
    viewCta: '詳細',
    napsDescription: '予約・ブログ機能を統合した日英バイリンガル美容室サイト。',
    cryptrackDescription:
      '暗号資産ポートフォリオを追跡するモバイルアプリ — リアルタイムPnL、チャート、完全オフライン対応。',
    moneySwapDescription:
      '法定通貨と暗号通貨のリアルタイム為替レートを提供するクロスプラットフォームアプリ。',
    siriusGarageDescription:
      'フランスの自動車修理工場向けウェブサイトリニューアル。',
    kakuregaDescription:
      '東京の男性専用理髪店向けモバイルファーストウェブサイト。ブログ機能統合。',
    detailedNapsDescription:
      'Napsはサービス・トリートメント・厳選ブログを掲載したモダンな多言語対応の美容室サイトです。統合予約機能により、希望の言語で簡単に予約できます。',
    technicalNapsDescription:
      'SvelteKit・TypeScript・TailwindCSSで構築し、Paraglideで日英の国際化を実装。MicroCMSでブログを管理し、Cloudflareにデプロイ。両市場向けのSEO最適化も対応しています。',
    detailedCryptDescription:
      'Cryptrackは、複数のウォレットやexchangeにまたがる暗号資産ポートフォリオを追跡するモバイルアプリです。売買取引を手動で記録し、リアルタイムのPnLを監視、チャートでパフォーマンスを可視化できます。生体認証で保護され、完全オフラインで動作。複数のポートフォリオと資産ごとのコスト基準追跡に対応しています。',
    technicalCryptDescription:
      'GoマイクロサービスをバックエンドとするオフラインファーストのReact Native（Expo）モバイルアプリです。ポートフォリオデータはSQLiteにローカル保存され、TypeScriptのFIFOロット追跡でメトリクスを計算します。軽量なGo APIがCoinGecko/CoinMarketCapからリアルタイム価格と為替レートを集約し、多段インメモリキャッシュとsingleflight重複排除で配信します。状態管理はポートフォリオ、通貨、テーマ、生体認証用のReact Contextプロバイダーで行っています。',
    detailedMoneySwapDescription:
      'MoneySwapは法定通貨と暗号通貨の橋渡しをする通貨変換アプリです。主要通貨と幅広い暗号通貨のリアルタイムレートを提供し、複数の通貨ペアをiOS・Android両対応で追跡できます。',
    technicalMoneySwapDescription:
      'React NativeとTypeScriptで構築し、Golang APIをバックエンドに採用。goroutineで複数の為替レートフィードを並行処理し、WebSocketでリアルタイム更新を実現。金融APIと連携しバックエンドにキャッシュレイヤーを実装しています。',
    detailedSiriusGarageDescription:
      'SiriusGarageはフランスのプロフェッショナルな自動車修理工場のウェブサイトリニューアルです。整備サービスと専門知識を紹介し、信頼感とプロフェッショナリズムを重視したデザインです。',
    technicalSiriusGarageDescription:
      'SvelteKitとTypeScriptで構築し、モバイルファーストのレスポンシブデザインを実装。構造化データと最適化されたメタデータによるローカルSEO対応。Cloudflareにデプロイしています。',
    detailedKakuregaDescription:
      'Kakuregaは東京の男性専用理髪店向けモバイルファーストウェブサイトです。サロンの雰囲気やサービスを紹介し、グルーミングのヒントやスタイル情報を発信するブログを統合。日本の伝統美と現代スタイルを融合したデザインです。',
    technicalKakuregaDescription:
      'SvelteKitとTypeScriptで構築し、TailwindCSSでモバイルファーストのレスポンシブデザインを実現。MicroCMSをヘッドレスCMSとして活用し、パフォーマンスを維持しながらブログ更新を簡素化。東京ローカルSEO向けの構造化データとメタデータも実装しています。',
    voyDescription:
      'SNSのインスピレーションを完全な旅行プランに変えるAI旅行アシスタントアプリ。',
    detailedVoyDescription:
      'Voyは旅行の発見と実際の予約をつなぐAI旅行プランニングアプリです。InstagramやTikTokの投稿、スクリーンショットを共有するだけで、AIアシスタントが自然な会話でコンテキストを理解し、ホテル検索・空き状況確認・予約確定まで案内します。会話は保存・再開可能で、検索エンジンではなく頼れる旅の相棒として設計されています。',
    technicalVoyDescription:
      'Turborepo/pnpmによる本番ポリグロットモノレポ構成。React Native/Exposモバイルアプリ、Next.js バックエンドAPI、PythonのAIアシスタントランタイム、バックグラウンドワーカーが共通のPostgreSQLとRedisを共有。AIはステートフルグラフアーキテクチャとデュアルLLM戦略で構築。tRPCでエンドツーエンドの型安全性を確保し、分散トレーシング・LLM可観測性・エラー追跡・iOS CI/CDを実装。',
    trakioDescription:
      'GPSセッション記録・ラップ/セクター自動検出・パフォーマンス分析を行うサーキット走行向けラップタイマーアプリ。',
    detailedTrakioDescription:
      'TrakioはサーキットドライバーのためのiOSアプリです。GPSで走行を記録し、ラップとセクターを自動検出。セッション履歴をローカル保存し、ベストラップ・セクター別パフォーマンス・走行マップなどのポストセッション分析を提供します。InstagramストーリーのシェアやリーダーボードなどのSNS機能も搭載しています。',
    technicalTrakioDescription:
      'React Native/ExpoによるiOSアプリで、GPSテレメトリー・SQLiteローカルストレージ・タイミングライン付きサーキットメタデータ・自動ラップ/セクター検出・ポストセッション分析を組み合わせています。GPSポイントはフィルタリング処理され、精度の低い読み取りは除外。速度はGPSジャンプへの対策としてポイント間の距離から再計算されます。セッションはステートマシンで管理され、DBへの書き込みを待たずUIに最新状態を反映。リーダーボードのバックエンドはCloudflare WorkerとD1で構築しています。',
    viewBtn: '詳細を表示',
    modal: {
      about: 'プロジェクトについて',
      technical: '技術概要',
      visitbtn: 'サイトを見る',
    },
  },
  expertise: {
    title: '提供するサービス',
    eyebrow: 'サービス',
    description:
      'コンセプトからデプロイまで — エンドツーエンドのデジタルソリューション。',
    categories: {
      frontend: {
        title: 'フロントエンド開発',
        description:
          'あらゆるデバイスで見栄えが良く、使いやすいインターフェースを構築します。スムーズで応答性の高いユーザー体験を提供することに注力しています。',
      },
      backend: {
        title: 'バックエンド開発',
        description:
          'スケーラビリティ、データ管理、そしてフロントエンドシステムとのシームレスな通信に重点を置いた信頼性の高い効率的なサーバーサイドアプリケーションを構築します。',
      },
      devops: {
        title: 'アプリ開発＆DevOps',
        description:
          'モバイルおよびデスクトップアプリケーションを構築し、クラウド環境を管理して信頼性の高い効率的な運用を実現します。シームレスなデプロイ、システムのスケーラビリティ、パフォーマンスの最適化に注力しています。',
      },
    },
    offers: [
      {
        title: 'バックエンドシステム & 社内ツール',
        description:
          'ビジネスの基盤となるシステムを構築 — 在庫管理から従業員ツール、ワークフロー自動化まで。',
        bullets: [
          '流通・在庫管理システム',
          '従業員管理 & 社内ダッシュボード',
          'API設計、データパイプライン & ビジネスロジック',
        ],
      },
      {
        title: 'モバイルアプリケーション',
        description:
          '実際の課題を解決するクロスプラットフォームアプリ — AI搭載アシスタント、金融ツール、フィールドユーティリティなど。',
        bullets: [
          'AI搭載パーソナルアシスタントアプリ',
          '暗号資産ポートフォリオ & 為替レート追跡',
          'GPS追跡 & 位置情報ツール',
        ],
      },
      {
        title: 'Webソリューション & フロントエンド',
        description:
          'レスポンシブなWebサイトとWebアプリ — クリーンで高速、あらゆるデバイスのユーザーに対応。',
        bullets: [
          'ビジネスサイト & クライアント向けプラットフォーム',
          '管理ダッシュボード & コンテンツ管理',
          'パフォーマンス最適化 & デプロイ',
        ],
      },
    ],
  },
  about: {
    eyebrow: '私について',
    heading: 'フランス出身のエンジニア、\n東京を拠点とするクラフトマン。',
    bio: [
      'バックエンドシステム、モバイルアプリ、社内ツールを中心に開発しています。流通管理プラットフォームからAIアシスタント、暗号資産トラッカーまで、しっかり動いて長く使えるソフトウェアを大切にしています。',
      'フランス出身、現在は日本を拠点に活動中。新しいツールを学び、プロジェクトに合わせて柔軟に対応するのが得意です。作るべきものがあれば、必ず形にします。',
      '仕事以外では、モータースポーツを楽しんだり、日本各地を旅して美しい景色を発見しています。',
      '世界中のクライアント向けにデジタルプロダクトを届けるソフトウェアコープ、508.devの立ち上げにも積極的に取り組んでいます。',
    ],
    facts: [
      { label: '拠点', value: '東京' },
      { label: '専門', value: 'バックエンド · モバイル · AI' },
      { label: '言語', value: 'FR · EN · JP' },
      { label: '趣味', value: 'モータースポーツ · テック · 旅行' },
    ],
    contact: {
      eyebrow: 'お問い合わせ',
      title: 'プロジェクトをお考えですか？',
      description: 'ご連絡をお待ちしています。ソーシャルメディアまたは直接メッセージをお送りください。',
      socialLabel: 'ソーシャルメディア',
      formLabel: 'メッセージを送信',
      form: {
        name: 'お名前',
        email: 'メールアドレス',
        message: 'メッセージ',
        submit: '送信',
        success: 'メッセージを送信しました！追ってご連絡させていただきます。',
        error: 'メッセージの送信中にエラーが発生しました。もう一度お試しください。',
        sending: '送信中...',
      },
    },
  },
};

export default jp;
