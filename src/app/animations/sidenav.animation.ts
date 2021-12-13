import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const onSideNavChange = trigger('onSideNavChange', [
  state(
    'close',
    style({
      'min-width': '50px',
    })
  ),
  state(
    'open',
    style({
      'min-width': '200px',
    })
  ),
  transition('open <=> close', [animate('0.3s')]),
  //   transition('close => open', animate('100ms ease-in')),
  //   transition('open => close', animate('100ms ease-in')),
]);

export const onMainContentChange = trigger('onMainContentChange', [
  state(
    'close',
    style({
      'margin-left': '62px',
    })
  ),
  state(
    'open',
    style({
      'margin-left': '200px',
    })
  ),
  transition('close => open', animate('100ms ease-in')),
  transition('open => close', animate('100ms ease-in')),
]);

export const animateText = trigger('animateText', [
  state(
    'hide',
    style({
      display: 'none',
      opacity: 0,
    })
  ),
  state(
    'show',
    style({
      display: 'block',
      opacity: 1,
    })
  ),
  //   transition('open <=> close', [
  //     animate('0.9s')
  //   ]),
  transition('close => open', animate('500ms ease-in')),
  transition('open => close', animate('5ms ease-out')),
]);
