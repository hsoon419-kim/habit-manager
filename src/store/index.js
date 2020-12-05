import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment-timezone'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    date: moment().tz(moment.tz.guess()).format('YYYY-MM-DD'),
    localStorageDataName: 'habit-manager-data',
    default: [
      {
        name: 'Sleep',
        info: {
          items: {
            startDate: 'Start Date',
            startTime: 'Start Time',
            finishDate: 'Finish Date',
            finishTime: 'Finish Time'
          },
          extraItems: {
            sleep: 'Sleep',
            wakeUp: 'Wake up'
          },
          goals: [
            {
              name: 'Sleep more than 6 hours'
            },
            {
              name: 'Wake up before 06:30'
            }
          ]
        },
        records: []
      },
      {
        name: 'Weight Training',
        info: {
          items: {
            squat: 'Squat',
            pushUp: 'Push Up',
            plank: 'Plank',
            burpeeTest: 'Burpee Test'
          },
          itemUnits: {
            squat: 'count',
            pushUp: 'count',
            plank: 'time',
            burpeeTest: 'time'
          },
          goals: [
            {
              name: 'Weight training everyday'
            }
          ]
        },
        records: []
      }
    ]
  },
  getters: {
    GET_DATE (state) {
      return state.date
    },
    GET_SLEEP_INFO (state) {
      const habitIdx = state.habit.findIndex(x => x.name === 'Sleep')
      return { name: state.habit[habitIdx].name, info: state.habit[habitIdx].info }
    },
    GET_SLEEP_RECORD (state) {
      const habitIdx = state.habit.findIndex(x => x.name === 'Sleep')
      const recordIdx = state.habit[habitIdx].records.findIndex(x => x.date === state.date)

      if (recordIdx === -1) {
        return {
          date: state.date,
          isRecorded: false,
          items: {
            startDate: state.date,
            startTime: '00:00',
            finishDate: state.date,
            finishTime: '00:00',
          },
          extraItems: {
            sleep: '00:00',
            wakeUp: '00:00',
          },
          goals: [false, false]
        }
      } else {
        return state.habit[habitIdx].records[recordIdx]
      }
    },
    GET_WEIGHT_TRAINING_INFO (state) {
      const habitIdx = state.habit.findIndex(x => x.name === 'Weight Training')
      return { name: state.habit[habitIdx].name, info: state.habit[habitIdx].info }
    },
    GET_WEIGHT_TRAINING_RECORD (state) {
      const habitIdx = state.habit.findIndex(x => x.name === 'Weight Training')
      const recordIdx = state.habit[habitIdx].records.findIndex(x => x.date === state.date)

      if (recordIdx === -1) {
        return {
          date: state.date,
          isRecorded: false,
          items: {
            squat: 0,
            pushUp: 0,
            plank: 0,
            burpeeTest: 0,
          },
          goals: [false]
        }
      } else {
        return state.habit[habitIdx].records[recordIdx]
      }
    }
  },
  mutations: {
    SET_DATE (state, args) {
      state.date = args
    },
    SET_DATA (state, args) {
      if (args === null) {
        state.habit = state.default
      } else {
        let habit = args
        state.default.forEach(x => {
          const item = args.find(y => y.name == x.name)
          if (item === undefined) habit.push(x)
        })
        state.habit = habit
      }
    },
    SET_SLEEP_RECORD (state, args) {
      const habitIdx = state.habit.findIndex(x => x.name === 'Sleep')
      const recordIdx = state.habit[habitIdx].records.findIndex(x => x.date === state.date)

      if (recordIdx === -1) {
        state.habit[habitIdx].records.push(args)
      } else {
        state.habit[habitIdx].records[recordIdx] = args
      }
    },
    SET_WEIGHT_TRAINING_RECORD (state, args) {
      const habitIdx = state.habit.findIndex(x => x.name === 'Weight Training')
      const recordIdx = state.habit[habitIdx].records.findIndex(x => x.date === state.date)

      if (recordIdx === -1) {
        state.habit[habitIdx].records.push(args)
      } else {
        state.habit[habitIdx].records[recordIdx] = args
      }
    }
  },
  actions: {
    LOAD_DATA (context) {
      const data = loadDataFromLocalStorage(context.state.localStorageDataName)
      context.commit('SET_DATA', data)
    },
    SAVE_SLEEP_RECORD (context, args) {
      context.commit('SET_SLEEP_RECORD', args)
      saveDataToLocalStorage(context.state.localStorageDataName, context.state.habit)
    },
    SAVE_WEIGHT_TRAINING_RECORD (context, args) {
      context.commit('SET_WEIGHT_TRAINING_RECORD', args)
      saveDataToLocalStorage(context.state.localStorageDataName, context.state.habit)
    }
  }
})

const loadDataFromLocalStorage = (name) => {
  return JSON.parse(localStorage.getItem(name))
}
const saveDataToLocalStorage = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data))
}