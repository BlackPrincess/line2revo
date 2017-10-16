<template lang="pug">
  #controls
    h1.section_title 地獄の大強化
    p.notice
      | 雑に作った
    .control
      form.form(action='#')
        .control-group
          label.control-group-label 初期レベル
          .control-group-input
            input.input(type='number' min='1' max='29' v-model='initLevel' required)
        .control-group
          label.control-group-label 目標レベル
          .control-group-input
            input.input(type='number' min='2' max='30' v-model='goalLevel' required)
        .control-group
          label.control-group-label 祝福を使う強化値
          .control-group-input
            input.input(type='number' min='1' max='30' v-model='useBlessingScrollLevel')
        .control-group
          label.control-group-label マーブルを使う強化値
          .control-group-input
            input.input(type='number' min='1' max='30' v-model='useMarbleLevel')
        .control-actions
          button.btn.btn-execute(v-on:click="execute") しみゅれーと！
    .result(v-show="results.length !== 0")
      .result-summary
        p.result-summary-item
          | 強化までにかかった回数
          span.count(v-text='tryCount')
          | 回
        p.result-summary-item
          | 使ったスクロール数
          span.count(v-text='normalQuantityTotal')
          | 枚
        p.result-summary-item
          | 使った祝福スクロール数
          span.count(v-text='blessingQuantityTotal')
          | 枚
        p.result-summary-item
          | 使ったマーブル数
          span.count(v-text='marbleQuantityTotal')
          | 枚
      ul.result-progress
        li.result-progress-item(v-for="result in results")
          span.level(v-text="result.level")
</template>

<script>
import { masterData, findByLevel } from '@/data'

export default {
  name: 'Controls',
  data () {
    return { 
      initLevel: 10,
      goalLevel: 20,
      useBlessingScrollLevel: null,
      useMarbleLevel: null,
      results: []
    }
  },
  props: {},
  computed: {
    tryCount() {
      return this.results.length;
    },
    normalQuantityTotal() {
      return this.results.map((a) => a.normalQuantity).reduce((a, b) => a + b, 0)
    },
    blessingQuantityTotal() {
      return this.results.map((a) => a.blessingQuantity).reduce((a, b) => a + b, 0)
    },
    marbleQuantityTotal() {
      return this.results.map((a) => a.marbleQuantity).reduce((a, b) => a + b, 0)
    }
  },
  methods: {
    execute() {
      let level = parseInt(this.initLevel, 10)
      this.results = []
      while( level < this.goalLevel ) {
        console.log(level)
        const blessing = this.isUsingBlessingScroll(level)
        const marble = this.isUsingMarble(level)
        
        const normalQuantity = blessing ? 0 : findByLevel(level).scrollQuantity
        const blessingQuantity = blessing ? findByLevel(level).scrollQuantity : 0
        const marbleQuantity = marble ? findByLevel(level).marbleQuantity : 0
        
        level = this.challenge(level, blessing, marble)
        this.results.push({
          level: level,
          blessing: blessing,
          marble: marble,
          normalQuantity: normalQuantity,
          blessingQuantity: blessingQuantity,
          marbleQuantity: marbleQuantity
        })
      }
    },
    
    challenge(level, useBlessingScroll, useMarble) {
      if(this.isSuccess(level)) {
        const up = useBlessingScroll ? this.blessingScrollUp() : 1
        return level + up
      } else {
        return (level === 10 || level === 20 || useMarble) ? level : level - 1;
      }
    },
    
    isSuccess(level) {
      return Math.random() < findByLevel(level).probability
    },
    
    blessingScrollUp() {
      return Math.round(Math.random() * 10) % 3 + 1
    },
    
    isUsingBlessingScroll(level) {
      if(!this.useBlessingScrollLevel) return false
      return level >= this.useBlessingScrollLevel
    },
    
    isUsingMarble(level) {
      if(!this.useMarbleLevel) return false
      return level >= this.useMarbleLevel
    }
  }
}
</script>

<style lang="scss" scoped>
.section_title {
  font-size: 3.2rem;
}

.control {
  margin-top: 20px;
  &-group {
    width: 360px;
    display: inline-block;
    
    &-label {
      display: inline-block;
      width: 200px;
      vertical-align: middle;
    }
    
    &-input {
      display: inline-block;
      width: 100px;
      padding: 8px 0;
    }
  }
  
  &-actions {
    padding: 20px;
    text-align: center;
  }
}

.result {
  &-summary {
    &-item {
      width: 360px;
      padding: 4px 0;
      
      & > .count {
        padding: 0 5px;
        font-size: 2.2rem;
      }
    }
  }
}

.result-progress {
  &-item {
    display: inline-block;
    padding-left: 20px;
    width: 50px;
    
    & > .level {
      position: relative;
      &::before {
        position: absolute;
        top: 0;
        left: -16px;
        bottom: 0;
        margin: auto;
        content: "";
        vertical-align: middle;
        box-sizing: border-box;
        width: 4px;
        height: 4px;
        border: 4px solid transparent;
        border-left: 4px solid #a3adff;
      }
      &::after{
        position: absolute;
        top: 0;
        bottom: 0;
        left: -20px;
        margin: auto;
        content: "";
        vertical-align: middle;
        width: 6px;
        height: 4px;
        border-left: 4px solid #a3adff;
      }
    }
  }
}

.input {
  display: block;
  padding: 6px 12px;
  width: 100%;
  border: 1px solid #999;
  background-color: #fff;
  color: #000;
  resize: none;
}

.btn {
  display: inline-block;
  align-items: center;
  padding: 0 20px;
  height: 40px;
  border-width: 0;
  border-radius: 2px;
  background: #6d11e5 no-repeat;
  color: #fff;
  font-size: 1.4rem;
  font-weight: bold;
  text-align: center;
  transition: opacity 500ms cubic-bezier(0.170, 0.935, 0.305, 1.000);
  cursor: pointer;
  
  &:hover {
    opacity: 0.7;
  }
  
  &-execute {
    min-width: 200px;
  }
}

</style>
