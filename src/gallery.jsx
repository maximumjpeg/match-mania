import React from 'react';
import Card from './card.jsx';
// const katakana = require('../dist/katakana.js');

// finish adding these
// 'シャ','シュ','ショ','ジャ','ジュ','ジョ',
//   'チャ','チュ','チョ','ニャ','ニュ','ニョ','ヒャ','ヒュ','ヒョ',
//   'ビャ','ビュ','ビョ','ピャ','ピュ','ピョ','ミャ','ミュ','ミョ','リャ','リュ','リョ'
class Kana {
  constructor(japanese, romaji, repetition, ease, interval) {
    this.japanese = japanese;
    this.romaji = romaji;
    this.repetition = repetition;
    this.ease = ease;
    this.interval = interval;
  }
};
// const katakana = ['ア','イ','ウ','エ','オ','カ','キ','ク','ケ','コ','サ','シ','ス','セ','ソ',
//   'タ','チ','ツ','テ','ト','ナ','ニ','ヌ','ネ','ノ','ハ','ヒ','フ','ヘ','ホ',
//   'マ','ミ','ム','メ','モ','ヤ','ユ','ヨ','ラ','リ','ル','レ','ロ','ワ','ヲ','ン',
//   'ガ','ギ','グ','ゲ','ゴ','ザ','ジ','ズ','ゼ','ゾ','ダ','ヂ','ヅ','デ','ド','バ','ビ','ブ','ベ','ボ','パ','ピ','プ','ペ','ポ',
//   'キャ','キュ','キョ','シャ','シュ','ショ','ジャ','ジュ','ジョ',
//   'チャ','チュ','チョ','ニャ','ニュ','ニョ','ヒャ','ヒュ','ヒョ',
//   'ビャ','ビュ','ビョ','ピャ','ピュ','ピョ','ミャ','ミュ','ミョ','リャ','リュ','リョ'];
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
  {テ: 'te'},
  {ト: 'to'},
  {ダ: 'da'},
  {ヂ: 'ji'},
  {ヅ: 'zu'},
  {デ: 'de'},
  {ド: 'do'},
  {ナ: 'na'},
  {ニ: 'ni'},
  {ヌ: 'nu'},
  {ネ: 'ne'},
  {ノ: 'no'},
  {ハ: 'ha'},
  {ヒ: 'hi'},
  {フ: 'fu'},
  {ヘ: 'he'},
  {ホ: 'ho'},
  {バ: 'ba'},
  {ビ: 'bi'},
  {ブ: 'bu'},
  {ベ: 'be'},
  {ボ: 'bo'},
  {パ: 'pa'},
  {ピ: 'pi'},
  {プ: 'pu'},
  {ペ: 'pe'},
  {ポ: 'po'},
  {マ: 'ma'},
  {ミ: 'mi'},
  {ム: 'mu'},
  {メ: 'me'},
  {モ: 'mo'},
  {ヤ: 'ya'},
  {ユ: 'yu'},
  {ヨ: 'yo'},
  {ラ: 'ra'},
  {リ: 'ri'},
  {ル: 'ru'},
  {レ: 're'},
  {ロ: 'ro'},
  {ワ: 'wa'},
  {ヲ: 'wo'},
  {ン: 'n'},
  {キャ: 'kya'},
  {キュ: 'kyu'},
  {キョ: 'kyo'}
]

const Gallery = (props) => {
  return <div className="gallery-wrapper">
    <div className="gallery">{katakana.map((character) => <Card japanese={Object.keys(character)[0]} romaji={Object.values(character)[0]} setCurrent={props.setCurrent} />)}</div>
  </div>
}

export default Gallery