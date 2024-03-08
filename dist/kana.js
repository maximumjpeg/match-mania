const katakana = [
  {'ア': 'a'},
  {'イ': 'i'},
  {'ウ': 'u'},
  {'エ': 'e'},
  {'オ': 'o'},
  {'カ': 'ka'},
  {'キ': 'ki'},
  {'ク': 'ku'},
  {'ケ': 'ke'},
  {'コ': 'ko'},
  {'ガ': 'ga'},
  {'ギ': 'gi'},
  {'グ': 'gu'},
  {'ゲ': 'ge'},
  {'ゴ': 'go'},
  {'サ': 'sa'},
  {'シ': 'shi'},
  {'ス': 'su'},
  {'セ': 'se'},
  {'ソ': 'so'},
  {'ザ': 'za'},
  {'ジ': 'ji'},
  {'ズ': 'zu'},
  {'ゼ': 'ze'},
  {'ゾ': 'zo'},
  {'タ': 'ta'},
  {'チ': 'chi'},
  {'ツ': 'tsu'},
  {'テ': 'te'},
  {'ト': 'to'},
  {'ダ': 'da'},
  {'ヂ': 'ji'},
  {'ヅ': 'zu'},
  {'デ': 'de'},
  {'ド': 'do'},
  {'ナ': 'na'},
  {'ニ': 'ni'},
  {'ヌ': 'nu'},
  {'ネ': 'ne'},
  {'ノ': 'no'},
  {'ハ': 'ha'},
  {'ヒ': 'hi'},
  {'フ': 'fu'},
  {'ヘ': 'he'},
  {'ホ': 'ho'},
  {'バ': 'ba'},
  {'ビ': 'bi'},
  {'ブ': 'bu'},
  {'ベ': 'be'},
  {'ボ': 'bo'},
  {'パ': 'pa'},
  {'ピ': 'pi'},
  {'プ': 'pu'},
  {'ペ': 'pe'},
  {'ポ': 'po'},
  {'マ': 'ma'},
  {'ミ': 'mi'},
  {'ム': 'mu'},
  {'メ': 'me'},
  {'モ': 'mo'},
  {'ヤ': 'ya'},
  {'ユ': 'yu'},
  {'ヨ': 'yo'},
  {'ラ': 'ra'},
  {'リ': 'ri'},
  {'ル': 'ru'},
  {'レ': 're'},
  {'ロ': 'ro'},
  {'ワ': 'wa'},
  {'ヲ': 'wo'},
  {'ン': 'n'},
  {'キャ': 'kya'},
  {'キュ': 'kyu'},
  {'キョ': 'kyo'},
  {'ギャ': 'gya'},
  {'ギュ': 'gyu'},
  {'ギョ': 'gyo'},
  {'シャ': 'sha'},
  {'シュ': 'shu'},
  {'ショ': 'sho'},
  {'ジャ': 'jya'},
  {'ジュ': 'jyu'},
  {'ジョ': 'jyo'},
  {'チャ': 'cha'},
  {'チュ': 'chu'},
  {'チョ': 'cho'},
  {'ニャ': 'nya'},
  {'ニュ': 'nyu'},
  {'ニョ': 'nyo'},
  {'ヒャ': 'hya'},
  {'ヒュ': 'hyu'},
  {'ヒョ': 'hyo'},
  {'ビャ': 'bya'},
  {'ビュ': 'byu'},
  {'ビョ': 'byo'},
  {'ピャ': 'pya'},
  {'ピュ': 'pyu'},
  {'ピョ': 'pyo'},
  {'ミャ': 'mya'},
  {'ミュ': 'myu'},
  {'ミョ': 'myo'},
  {'リャ': 'rya'},
  {'リュ': 'ryu'},
  {'リョ': 'ryo'},
  {'アー': 'aa'},
  {'イー': 'ii'},
  {'ウー': 'uu'},
  {'エー': 'ee'},
  {'オー': 'oo'}
]

  const hiragana = [
    {'あ': 'a'},
    {'い': 'i'},
    {'う': 'u'},
    {'え': 'e'},
    {'お': 'o'},
    {'か': 'ka'},
    {'が': 'ga'},
    {'き': 'ki'},
    {'ぎ': 'gi'},
    {'く': 'ku'},
    {'ぐ': 'gu'},
    {'け': 'ke'},
    {'げ': 'ge'},
    {'こ': 'ko'},
    {'ご': 'go'},
    {'さ': 'sa'},
    {'ざ': 'za'},
    {'し': 'shi'},
    {'じ': 'ji'},
    {'す': 'su'},
    {'ず': 'zu'},
    {'せ': 'se'},
    {'ぜ': 'ze'},
    {'そ': 'so'},
    {'ぞ': 'zo'},
    {'た': 'ta'},
    {'だ': 'da'},
    {'ち': 'chi'},
    {'ぢ': 'ji'},
    {'つ': 'tsu'},
    {'づ': 'zu'},
    {'て': 'te'},
    {'で': 'de'},
    {'と': 'to'},
    {'ど': 'do'},
    {'な': 'na'},
    {'に': 'ni'},
    {'ぬ': 'nu'},
    {'ね': 'ne'},
    {'の': 'no'},
    {'は': 'ha'},
    {'ば': 'ba'},
    {'ぱ': 'pa'},
    {'ひ': 'hi'},
    {'び': 'bi'},
    {'ぴ': 'pi'},
    {'ふ': 'fu'},
    {'ぶ': 'bu'},
    {'ぷ': 'pu'},
    {'へ': 'he'},
    {'べ': 'be'},
    {'ぺ': 'pe'},
    {'ほ': 'ho'},
    {'ぼ': 'bo'},
    {'ぽ': 'po'},
    {'ま': 'ma'},
    {'み': 'mi'},
    {'む': 'mu'},
    {'め': 'me'},
    {'も': 'mo'},
    {'や': 'ya'},
    {'ゆ': 'yu'},
    {'よ': 'yo'},
    {'ら':'ra'},
    {'り': 'ri'},
    {'る': 'ru'},
    {'れ': 're'},
    {'ろ': 'ro'},
    {'わ': 'wa'},
    {'を': 'wo'},
    {'ん': 'n'},
    {'きゃ': 'kya'},
    {'きゅ': 'kyu'},
    {'きょ': 'kyo'},
    {'ぎゃ': 'gya'},
    {'ぎゅ': 'gyu'},
    {'ぎょ': 'gyo'},
    {'しゃ': 'sha'},
    {'しゅ': 'shu'},
    {'しょ': 'sho'},
    {'じゃ': 'jya'},
    {'じゅ': 'jyu'},
    {'じょ': 'jyo'},
    {'ちゃ': 'cha'},
    {'ちゅ': 'chu'},
    {'ちょ': 'cho'},
    {'にゃ': 'nya'},
    {'にゅ': 'nyu'},
    {'にょ': 'nyo'},
    {'ひゃ': 'hya'},
    {'ひゅ': 'hyu'},
    {'ひょ': 'hyo'},
    {'びゃ': 'bya'},
    {'びゅ': 'byu'},
    {'びょ': 'byo'},
    {'ぴゃ': 'pya'},
    {'ぴゅ': 'pyu'},
    {'ぴょ': 'pyo'},
    {'みゃ': 'mya'},
    {'みゅ': 'myu'},
    {'みょ': 'myo'},
    {'りゃ': 'ryo'},
    {'りゅ': 'ryu'},
    {'りょ': 'ryo'},
    {'ああ': 'aa'},
    {'いい': 'ii'},
    {'うう': 'uu'},
    {'ええ': 'ee'},
    {'おお': 'oo'},
    {'えい': 'ei'},
    {'おう': 'ou'}
  ];


module.exports = {
  katakana, hiragana
};