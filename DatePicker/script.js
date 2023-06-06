console.clear();
const data = {
  firstDate: null,
  secondDate: null
};

const machine = {
  initial: 'idle',
  states: {
    idle: {
      on: {
        pointerdown: (data, event) => {
          data.firstDate = +event.currentTarget.dataset.day;
          data.secondDate = null;
          return 'dragging';
        }
      }
    },
    dragging: {
      on: {
        pointerover: (data, event) => {
          data.secondDate = +event.currentTarget.dataset.day;
          
          return 'dragging';
        },
        pointerup: 'idle',
        pointercancel: 'idle'
      }
    }
  }
};

// idle
let currentState = machine.initial;

function send(event) {
  const transition = machine
    .states[currentState]
    .on[event.type];

  if (typeof transition === 'function') {
    currentState = transition(data, event);
    updateDOM();
  } else if (transition) {
    currentState = transition;
    updateDOM();
  }
}

/* ---------------------------------- */

const allDayEls = document.querySelectorAll('[data-day]');

allDayEls.forEach(dayEl => {
  dayEl.addEventListener('pointerdown', send);
  dayEl.addEventListener('pointerover', send);
});

document.body.addEventListener('pointerup', send);

/* ---------------------------------- */

function updateDOM(){
  document.querySelectorAll('[data-selected]')
    .forEach(el => {
      delete el.dataset.selected
    });
  
  const startDate = Math.min(data.firstDate, data.secondDate);
  const endDate = Math.max(data.firstDate, data.secondDate);
  
  if ( startDate ) {
    const startDateEl = document.querySelector(`[data-day="${startDate}"]`);
    startDateEl.dataset.selected = "start";
  }
  
  if ( endDate ) {
    const endDateEl = document.querySelector(`[data-day="${endDate}"]`);
    endDateEl.dataset.selected = "end";
  }
}
