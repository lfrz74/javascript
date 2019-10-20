import { trigger, state, animate, transition, style, query, keyframes, stagger, group } from '@angular/animations';

export const Animations = [
    trigger('mover-fotografias', [
        transition('* => right', [
            style({transform:'translateX(100%)'}),
            query('.btn-leer-mas', style({transform: 'scale(0.2)', opacity:0, background: '#fff'})),
            query('.txt-leer-mas', style({opacity:0})),
            query('.linea-inferior', style({left: '100%'})),
            query('.data-fotografia', style({opacity: 0, transform: 'translateX(20%)'})),
            group([
                animate('1000ms 500ms cubic-bezier(0.23, 1, 0.32, 1)', style('*')),
                query('.btn-leer-mas', animate('600ms 1200ms cubic-bezier(0.785, 0.135, 0.15, 0.86)', keyframes([
                    style({opacity:1, transform: 'scale(1)', offset:0.8}),
                    style({background:'transparent', offset:1})
                ]))),
                query('.txt-leer-mas', animate('300ms 1200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', style('*'))),
                query('.linea-inferior', animate('300ms 1200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', style('*'))),
                query('.data-fotografia', animate('300ms 1200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', style('*')))
            ])
        ]),
        transition('* => left', [
            style({transform:'translateX(-100%)'}),
            query('.btn-leer-mas', style({transform: 'scale(0.2)', opacity:0, background: '#fff'})),
            query('.txt-leer-mas', style({opacity:0})),
            query('.linea-inferior', style({right: '100%'})),
            query('.data-fotografia', style({opacity: 0, transform: 'translateX(-20%)'})),
            group([
                animate('1000ms 500ms cubic-bezier(0.23, 1, 0.32, 1)', style('*')),
                query('.btn-leer-mas', animate('600ms 1200ms cubic-bezier(0.785, 0.135, 0.15, 0.86)', keyframes([
                    style({opacity:1, transform: 'scale(1)', offset:0.8}),
                    style({background:'transparent', offset:1})
                ]))),
                query('.txt-leer-mas', animate('300ms 1200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', style('*'))),
                query('.linea-inferior', animate('300ms 1200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', style('*'))),
                query('.data-fotografia', animate('300ms 1200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', style('*')))
            ])
        ]),
        transition('* => void', [
            style({'z-index':0}),
            animate('1500ms', keyframes([
                style({opacity:0.5, offset:0.3}),
                style({opacity:0, offset:1})
            ]))
        ])
    ]),
    trigger('ver-mas',[
        transition('void => *', [
            style({opacity:0}),
            query('.detalle', style({opacity:0, transform:'translateY(180px)'})),
            query('.twitter, .facebook', style({transform:'scale(0)'})),
            group([
                animate('300ms', style({opacity:1})),
                query('.detalle', stagger(50, [
                    animate('600ms cubic-bezier(0.175, 0.885, 0.32, 1.275)', style('*'))
                ]))
            ]),
            query('.twitter', animate('200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)', style('*'))),
            query('.facebook', animate('200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)', style('*')))
        ])
    ])
]