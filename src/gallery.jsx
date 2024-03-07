import React from 'react';
import Card from './card.jsx';
const kana = require('../dist/kana.js');

// finish adding these
class Kana {
  constructor(japanese, romaji, repetition, ease, interval) {
    this.japanese = japanese;
    this.romaji = romaji;
    this.repetition = repetition;
    this.ease = ease;
    this.interval = interval;
  }
};

// const katakana = [
//   {'ア': 'a'},
//   {'イ': 'i'},
//   {'ウ': 'u'},
//   {'エ': 'e'},
//   {'オ': 'o'},
//   {'カ': 'ka'},
//   {'キ': 'ki'},
//   {'ク': 'ku'},
//   {'ケ': 'ke'},
//   {'コ': 'ko'},
//   {'ガ': 'ga'},
//   {'ギ': 'gi'},
//   {'グ': 'gu'},
//   {'ゲ': 'ge'},
//   {'ゴ': 'go'},
//   {'サ': 'sa'},
//   {'シ': 'shi'},
//   {'ス': 'su'},
//   {'セ': 'se'},
//   {'ソ': 'so'},
//   {'ザ': 'za'},
//   {'ジ': 'ji'},
//   {'ズ': 'zu'},
//   {'ゼ': 'ze'},
//   {'ゾ': 'zo'},
//   {'タ': 'ta'},
//   {'チ': 'chi'},
//   {'ツ': 'tsu'},
//   {'テ': 'te'},
//   {'ト': 'to'},
//   {'ダ': 'da'},
//   {'ヂ': 'ji'},
//   {'ヅ': 'zu'},
//   {'デ': 'de'},
//   {'ド': 'do'},
//   {'ナ': 'na'},
//   {'ニ': 'ni'},
//   {'ヌ': 'nu'},
//   {'ネ': 'ne'},
//   {'ノ': 'no'},
//   {'ハ': 'ha'},
//   {'ヒ': 'hi'},
//   {'フ': 'fu'},
//   {'ヘ': 'he'},
//   {'ホ': 'ho'},
//   {'バ': 'ba'},
//   {'ビ': 'bi'},
//   {'ブ': 'bu'},
//   {'ベ': 'be'},
//   {'ボ': 'bo'},
//   {'パ': 'pa'},
//   {'ピ': 'pi'},
//   {'プ': 'pu'},
//   {'ペ': 'pe'},
//   {'ポ': 'po'},
//   {'マ': 'ma'},
//   {'ミ': 'mi'},
//   {'ム': 'mu'},
//   {'メ': 'me'},
//   {'モ': 'mo'},
//   {'ヤ': 'ya'},
//   {'ユ': 'yu'},
//   {'ヨ': 'yo'},
//   {'ラ': 'ra'},
//   {'リ': 'ri'},
//   {'ル': 'ru'},
//   {'レ': 're'},
//   {'ロ': 'ro'},
//   {'ワ': 'wa'},
//   {'ヲ': 'wo'},
//   {'ン': 'n'},
//   {'キャ': 'kya'},
//   {'キュ': 'kyu'},
//   {'キョ': 'kyo'},
//   {'ギャ': 'gya'},
//   {'ギュ': 'gyu'},
//   {'ギョ': 'gyo'},
//   {'シャ': 'sha'},
//   {'シュ': 'shu'},
//   {'ショ': 'sho'},
//   {'ジャ': 'jya'},
//   {'ジュ': 'jyu'},
//   {'ジョ': 'jyo'},
//   {'チャ': 'cha'},
//   {'チュ': 'chu'},
//   {'チョ': 'cho'},
//   {'ニャ': 'nya'},
//   {'ニュ': 'nyu'},
//   {'ニョ': 'nyo'},
//   {'ヒャ': 'hya'},
//   {'ヒュ': 'hyu'},
//   {'ヒョ': 'hyo'},
//   {'ビャ': 'bya'},
//   {'ビュ': 'byu'},
//   {'ビョ': 'byo'},
//   {'ピャ': 'pya'},
//   {'ピュ': 'pyu'},
//   {'ピョ': 'pyo'},
//   {'ミャ': 'mya'},
//   {'ミュ': 'myu'},
//   {'ミョ': 'myo'},
//   {'リャ': 'rya'},
//   {'リュ': 'ryu'},
//   {'リョ': 'ryo'},
//   {'アー': 'aa'},
//   {'イー': 'ii'},
//   {'ウー': 'uu'},
//   {'エー': 'ee'},
//   {'オー': 'oo'}
// ]

const Gallery = (props) => {
  return <div className="gallery-wrapper">
    <div className="gallery">{kana.katakana.map((character) => <Card japanese={Object.keys(character)[0]} romaji={Object.values(character)[0]} setCurrent={props.setCurrent} />)}</div>
  </div>
}

export default Gallery