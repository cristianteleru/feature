<template>
  <div class="main">
    <!-- <span class="arrow-left"><span><</span></span> -->
    <div class="feature--container">
      <ul class="year--container">
        <li class="year-item" v-for="(year, key) in yearLabel">
          <span class="year-label">{{ key }}</span>

          <ul class="months--container">
            <li class="month-item" v-for="(month, key) in year">
              <span class="month-label">{{ key | moment("MMM") }}</span>

              <ul class="events--container">
                <li class="event--container" v-for="event in month">
                  <div class="event-item">
                    <div class="thumb--container">
                      <div class="thumb-overlay" 
                      :class="event.eventFlag" 
                      v-if="event.score || event.icon">
                        <span class="thumb-info">{{ event.score || event.icon }}</span>
                      </div>
                      <img class="main-thumb" :class="event.eventFlag" :src="event.mainThumb">
                      <img class="sec-thumb" :class="event.eventFlag" :src="event.secThumb">
                    </div>
                    <p class="upper-label">{{ event.upperLabel }}</p>
                    <p class="lower-label">{{ event.lowerLabel }} </p>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- <span class="arrow-right" @click="goToRight"><span>></span></span> -->
  </div>
</template>

<script>

import eventList from '../assets/eventlist.json';

export default {
  data() {
    return {
      yearLabel: {},
      events: [],
    };
  },
  // created() {
  //   debugger;
  // },
  methods: {
    goToRight() {

    },

    goToLeft() {

    }
  },
  mounted() {
    this.events = eventList;

    this.events.forEach((ev) => {
      const date = this.$moment(ev.eventDate);
      if(date.year() in this.yearLabel) {
        if(date.month() in this.yearLabel[date.year()]) {
          // daca exista
          this.yearLabel[date.year()][date.month()].push(ev);
        } else {
          // creez o lista noua de ev
          this.yearLabel[date.year()][date.month()] = [ev];
        }
      } else {
        this.yearLabel[date.year()] = {};
        this.yearLabel[date.year()][date.month()] = [ev];
      }
    });
    console.log(this.yearLabel);
  },
};
</script>

<style scoped lang="stylus">
@import '../styles/style.styl';

.main
  position relative
  
.feature--container
  overflow auto
  overflow-y hidden

.year--container,
.months--container
  display flex
  flex-direction row 
  justify-content space-between
  
.year-item,
.month-item
  flex-grow 1
  text-align center
  
.month-label,
.year-label
  display block
  font-size 12px
  line-height 16px
  font-family "Open Sans"
  border-right 1px solid spliterLineColor
  
.year-label
  min-width 200px
  background-color yearColor
  
.month-label
  background-color monthColor
  flex-grow 1

.events--container
  display flex
  justify-content space-around

.event-item
  width 100px
  margin-top 10px

.thumb--container
  position relative
  width 40px 
  height 40px
  left 50%
  transform translateX(-50%)
  z-index 1

.ppl
  border-radius 50%
  
.org
  border-radius 5px  
  
.thumb-overlay
  background-color overlayColor
  position absolute
  z-index 2
  width 100%
  height 100%

.sec-thumb
  width 16px 
  height 16px
  position absolute
  top -4px
  right -4px
  z-index 3

.upper-label,
.lower-label
  font-family "Open Sans"
  font-weight 600
  line-height 14px
  font-size 12px
  text-align center
  color labelsColor
  
.upper-label
  overflow hidden
  text-overflow ellipsis
  display -webkit-box
  line-height 14px
  max-height 28px
  -webkit-line-clamp 2
  -webkit-box-orient vertical
  
.thumb-info
  font-size 21px
  color #fff
  display block
  position relative
  top 50%
  left 50%
  transform translate(-50%, -50%)

.arrow-left,
.arrow-right
  position absolute
  top 50%
  background-color #D7F0DB
  mix-blend-mode normal
  opacity 0.5
  transform matrix(-1, 0, 0, 1, 0, 0)
  height 50px
  width 40px
  cursor pointer
  z-index 5
  text-align center
  line-height 50px
  transform translateY(-50%)
  span
    color #4EC355
    opacity 1
    
  
.arrow-left
  left 10px
  
.arrow-right
  right 10px
  
</style>
