import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment-timezone'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    date: moment().tz(moment.tz.guess()).format('YYYY-MM-DD'),

    localStorageDataName: 'habit-manager-data',
    
    habit: [],

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
        name: 'Weight',
        info: {
          items: {
            weight: 'Weight (kg)',
          },
          goals: [
            {
              name: 'Check a weight'
            },
            {
              name: 'Make a weight 70.0kg'
            }
          ]
        },
        records: []
      },
      {
        name: 'Diet',
        info: {
          items: {
            startTime: 'Start ',
            finishTime: 'Finish',
            lunchName: 'Lunch (menu)',
            lunchCalorie: 'Calorie (kcal)',
            dinnerName: 'Dinner (menu)',
            dinnerCalorie: 'Calorie (kcal)',
            extraName: 'Extra (menu)',
            extraCalorie: 'Calorie (kcal)'
          },
          goals: [
            {
              name: 'Intermittent Fasting (8H)'
            },
            {
              name: 'Eat less than 2000 kcal'
            }
          ]
        },
        records: []
      },
      {
        name: 'Exercise',
        info: {
          items: {
            squat: 'Squat (count)',
            pushUp: 'Push Up (count)',
            plank: 'Plank (sec)',
            burpeeTest: 'Burpee Test (count)'
          },
          goals: [
            {
              name: 'Exercise'
            },
            {
              name: 'Achieve the count of goals'
            }
          ]
        },
        records: []
      },
      {
        name: 'SW',
        info: {
          items: {
            item: 'Item',
            time: 'Time (hours)',
            detail: 'Detail',
          },
          goals: [
            {
              name: 'Study'
            }
          ]
        },
        records: []
      },
      {
        name: 'English',
        info: {
          items: {
            item: 'Item',
            time: 'Time (hours)',
            detail: 'Detail',
          },
          goals: [
            {
              name: 'Study'
            }
          ]
        },
        records: []
      }
    ],
    defaultRecord: [
      {
        name: 'Sleep',
        record: {
          date: '',
          isRecorded: false,
          items: {
            startDate: '',
            startTime: '00:00',
            finishDate: '',
            finishTime: '00:00',
          },
          extraItems: {
            sleep: '00:00',
            wakeUp: '00:00',
          },
          goals: [false, false]
        }
      },
      {
        name: 'Weight',
        record: {
          date: '',
          isRecorded: false,
          items: {
            weight: 0
          },
          goals: [false,false]
        }
      },
      {
        name: 'Diet',
        record: {
          date: '',
          isRecorded: false,
          items: {
            startTime: '00:00',
            finishTime: '00:00',
            lunchName: '',
            lunchCalorie: 0,
            dinnerName: '',
            dinnerCalorie: 0,
            extraName: '',
            extraCalorie: 0
          },
          goals: [false,false]
        }
      },
      {
        name: 'Exercise',
        record: {
          date: '',
          isRecorded: false,
          items: {
            squat: 0,
            pushUp: 0,
            plank: 0,
            burpeeTest: 0,
          },
          goals: [false,false]
        }
      },
      {
        name: 'SW',
        record: {
          date: '',
          isRecorded: false,
          items: {
            item: '',
            time: 0,
            detail: ''
          },
          goals: [false]
        }
      },
      {
        name: 'English',
        record: {
          date: '',
          isRecorded: false,
          items: {
            item: '',
            time: 0,
            detail: ''
          },
          goals: [false]
        }
      }
    ],
  },
  getters: {
    GET_DATE (state) {
      return state.date
    },
    GET_DATA (state) {
      return JSON.stringify(state.habit)
    },
    GET_HABIT (state) {
      return state.habit
    },

    GET_SLEEP_INFO (state) {
      return getHabitInfo(state, 'Sleep')
    },
    GET_WEIGHT_INFO (state) {
      return getHabitInfo(state, 'Weight')
    },
    GET_DIET_INFO (state) {
      return getHabitInfo(state, 'Diet')
    },
    GET_EXERCISE_INFO (state) {
      return getHabitInfo(state, 'Exercise')
    },
    GET_SW_INFO (state) {
      return getHabitInfo(state, 'SW')
    },
    GET_ENGLISH_INFO (state) {
      return getHabitInfo(state, 'English')
    },

    GET_SLEEP_RECORD (state) {
      return getHabitRecord(state, 'Sleep')
    },
    GET_WEIGHT_RECORD (state) {
      return getHabitRecord(state, 'Weight')
    },
    GET_DIET_RECORD (state) {
      return getHabitRecord(state, 'Diet')
    },
    GET_EXERCISE_RECORD (state) {
      return getHabitRecord(state, 'Exercise')
    },
    GET_SW_RECORD (state) {
      return getHabitRecord(state, 'SW')
    },
    GET_ENGLISH_RECORD (state) {
      return getHabitRecord(state, 'English')
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
        let habit = []
        state.default.forEach(x => {
          const item = args.find(y => y.name == x.name)
          if (item === undefined) {
            habit.push(x)
          } else {
            const update = { name : x.name, info: x.info, records: item.records }
            habit.push(update)
          }
        })
        state.habit = habit
      }
    },
    SET_RECORD (state, args) {
      setHabitRecord(state, args.type, args.record)
    }
  },
  actions: {
    LOAD_DATA (context) {
      const data = loadDataFromLocalStorage(context.state.localStorageDataName)
      context.commit('SET_DATA', data)
    },
    SAVE_RECORD (context, args) {
      context.commit('SET_RECORD', args)
      saveDataToLocalStorage(context.state.localStorageDataName, context.state.habit)
    },
    UPLOAD_DATA (context, args) {
      context.commit('SET_DATA', args)
      saveDataToLocalStorage(context.state.localStorageDataName, context.state.habit)
    }
  }
})

const getHabitInfo = (state, habit) => {
  const habitIdx = state.habit.findIndex(x => x.name === habit)
  return { name: state.habit[habitIdx].name, info: state.habit[habitIdx].info }    
}
const getHabitRecord = (state, habit) => {
  const habitIdx = state.habit.findIndex(x => x.name === habit)
  const recordIdx = state.habit[habitIdx].records.findIndex(x => x.date === state.date)

  if (recordIdx === -1) {
    const defaultRecord = JSON.parse(JSON.stringify(state.defaultRecord.find(x => x.name === habit).record))
    defaultRecord.date = state.date

    switch (habit) {
      case 'Sleep':
        defaultRecord.items.startDate = state.date
        defaultRecord.items.finishDate = state.date
        break
    }
    return defaultRecord
  } else {
    return state.habit[habitIdx].records[recordIdx]
  }
}

const setHabitRecord = (state, habit, record) => {
  const habitIdx = state.habit.findIndex(x => x.name === habit)
  const recordIdx = state.habit[habitIdx].records.findIndex(x => x.date === state.date)

  if (recordIdx === -1) {
    state.habit[habitIdx].records.push(record)
  } else {
    state.habit[habitIdx].records[recordIdx] = record
  }
}

const loadDataFromLocalStorage = (name) => {
  return JSON.parse(localStorage.getItem(name))
}
const saveDataToLocalStorage = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data))
}