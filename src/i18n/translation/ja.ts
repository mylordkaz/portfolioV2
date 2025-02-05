import type { Translation } from "../types";

const jp: Translation = {
  nav: {
    projects: "プロジェクト",
    expertise: "専門分野",
    about: "私について",
    contact: "お問い合わせ",
  },
  hero: {
    title: "ソフトウェアエンジニア & ウェブデザイナー",
    description:
      "東京を拠点とするデジタルクラフトマン。高性能なウェブソリューションを提供します。",
  },
  section: {
    title: "最新のプロジェクト",
  },
  footer: {
    softwareEngineer: "Software Engineer",
  },
  projects: {
    title: "プロジェクト",
    subtitle: "ポートフォリオショーケース",
    description:
      "最新の作品や技術プロジェクトをご覧ください。各プロジェクトはユニークな課題と革新的なソリューションを表しています。",
    napsDescription: "ブログ機能を統合した美容室のウェブサイト。",
    cryptrackDescription:
      "暗号資産ポートフォリオを管理するMacOS用デスクトップアプリ。",
    detailedNapsDescription:
      "Napsは、英語と日本語のユーザーのために丁寧にデザインされた現代的な多言語対応のビューティーサロンウェブサイトです。サロンのサービス、トリートメントの詳細、厳選されたブログセクションを通じて、お客様の美の旅をシームレスにご案内します。予約機能を統合し、お客様が希望の言語でサービスを探し、予約することができます。",
    technicalNapsDescription:
      "SvelteKitとTypeScriptを使用して構築され、TailwindCSSでスタイリングされています。Paraglideを通じて英語と日本語のコンテンツをサポートする堅牢な国際化機能を備えています。クライアントサイドルーティングとダイナミックコンテンツローディングを含むアーキテクチャで、MicroCMSがブログコンテンツ管理を担当しています。Netlifyにデプロイされ、両言語での包括的なSEO最適化を実装し、両市場での高い検索可視性を確保しています。レスポンシブデザインとパフォーマンス最適化により、あらゆるデバイスでスムーズなユーザーエクスペリエンスを実現しています。",
    detailedCryptDescription:
      "Cryptrackは、ユーザーが暗号通貨投資を追跡できるmacOSネイティブデスクトップアプリケーションです。リアルタイム価格更新、売買取引の追跡ができるポートフォリオ管理、パフォーマンス分析機能を備え、ダーク/ライトモード対応の洗練されたモダンなインターフェースを提供します。複数の暗号通貨を安全に管理し、投資の利益や損失を長期的に分析できます。",
    technicalCryptDescription:
      "このデスクトップアプリケーションは、Wails v2.9（Go/React）を使用して構築され、Goバックエンドがビジネスロジックとデータ管理を担当し、React TypeScriptフロントエンドがTailwind CSSでスタイリングされています。CoinMarketCap APIを統合し、リアルタイムの暗号通貨データを提供。SQLiteとGORMを使った永続ストレージを実装し、bcryptハッシュを使用した安全なユーザー認証を行い、macOSキーリングでセッション管理を実現しています。アーキテクチャはUI、ビジネスロジック、データレイヤーの明確な分離を持つサービスベースパターンに従っています。",
    viewBtn: "詳細を表示",
    modal: {
      about: "プロジェクトについて",
      technical: "技術概要",
      gallery: "ギャラリー",
      visitbtn: "サイトを見る",
    },
  },
  expertise: {
    title: "技術的な専門知識",
    description:
      "最新技術を活用し、スピード、効率性、正確性に重点を置いたフルスタック開発に特化しています。パフォーマンスの最適化、信頼性のあるスケーラブルなソリューションを通じて、ユーザー体験の向上に情熱を持っています。",
    categories: {
      frontend: {
        title: "フロントエンド開発",
        description:
          "あらゆるデバイスで見栄えが良く、使いやすいインターフェースを構築します。スムーズで応答性の高いユーザー体験を提供することに注力しています。",
      },
      backend: {
        title: "バックエンド開発",
        description:
          "スケーラビリティ、データ管理、そしてフロントエンドシステムとのシームレスな通信に重点を置いた信頼性の高い効率的なサーバーサイドアプリケーションを構築します。",
      },
      devops: {
        title: "アプリ開発＆DevOps",
        description:
          "モバイルおよびデスクトップアプリケーションを構築し、クラウド環境を管理して信頼性の高い効率的な運用を実現します。シームレスなデプロイ、システムのスケーラビリティ、パフォーマンスの最適化に注力しています。",
      },
    },
  },
  about: {
    title: "私について",
    description:
      "ブロックチェーンと新興技術に情熱を注ぐフランス出身のソフトウェアエンジニア。洗練されたユーザーインターフェースから強力なバックエンドシステムまで、確実に機能するソリューションの提供に注力しています。",
    intro: {
      title: "自己紹介",
      content: `フランス出身で日本在住。好奇心旺盛でチャレンジを追求する性格です。これまで世界中で高級ホスピタリティ管理を経験し、その後テクノロジーの世界に飛び込みました。\nコーディングしていない時は、車の整備をしたり、日本の美しい自然を探索したりしています。`,
    },
    services: {
      title: "提供するサービス",
      items: [
        {
          title: "Webアプリケーション開発",
          description:
            "直感的で美しいデザインを持つレスポンシブかつセキュアなWebアプリケーションのフルスタックソリューション。",
        },
        {
          title: "モバイル & デスクトップアプリ開発",
          description:
            "お客様のニーズに合わせたカスタムクロスプラットフォームアプリケーションを作成します。",
        },
        {
          title: "パフォーマンス & 最適化",
          description:
            "信頼性の高いサーバーサイドシステムを構築し、スピードと効率を向上させることでシームレスな運用を実現します。",
        },
      ],
    },
    button: "相談のためにお問い合わせください",
  },
  contact: {
    title: "お問い合わせ",
    description:
      "プロジェクトのアイデアをお持ちですか？ご連絡をお待ちしています。メッセージを送信するか、ソーシャルメディアでつながりましょう。",
    form: {
      name: "お名前",
      email: "メールアドレス",
      message: "メッセージ",
      submit: "送信",
    },
    socials: {
      title: "ソーシャルメディア",
      description: "ソーシャルメディアやメールでお気軽にお問い合わせください。",
    },
  },
};

export default jp;
