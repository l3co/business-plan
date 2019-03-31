// import {Injectable} from '@angular/core';
//
// import {Startup} from './models/startup.models';
// import {UserService} from './user/user.service';
// import {Monetize} from './models/monetize.models';
// import {Concurrences} from './models/concurrences.models';
// import {Products} from './models/products.models';
// import {Costs, Investments} from './models/finances.models';
// import {environment} from '../environments/environment';
//
//
// import {HttpClient, HttpHeaders} from '@angular/common/http';
//
//
// @Injectable({
//   providedIn: 'root'
// })
// export class MailService {
//
//   constructor(private http: HttpClient, private service: UserService) {
//   }
//
//   share(startup: Startup) {
//
//     // sgMail.setApiKey(environment.mail_api_key);
//
//     const params: URLSearchParams = new URLSearchParams();
//     const headers = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
//
//     params.set('to', 'user@example.com');
//     params.set('from', 'you@yoursupercoolapp.com');
//     params.set('subject', 'test-email');
//     params.set('content', 'Hello World');
//
//     this.http
//       .post('https://api.sendgrid.com/v3/mail/send',
//         {
//           to: this.service.getMailFromUserAuthenticated(),
//           from: environment.mail,
//           subject: startup.idea,
//           content: [{
//             type: ""
//           }]
//         }
//         ,
//         {
//           headers
//         })
//       .toPromise()
//     ;
//
//
//     const msg = {
//       to: this.service.getMailFromUserAuthenticated(),
//       from: environment.mail,
//       subject: startup.idea,
//       text: '',
//       html: `
//        <h1>${startup.idea}</h1>
//        <h3>Objetivo</h3>
//        <p>${startup.objective}</p>
//        <h3>Monetização</h3>
//         ${this.builderMonetize(startup.monetize)}
//        <h3>Concorrentes</h3>
//        ${this.builderConcurrences(startup.concurrences)}
//       <h3>Produtos</h3>
//        ${this.builderProducts(startup.products)}
//        <h3>Custos</h3>
//        ${this.builderCosts(startup.costs)}
//       <h3>Investimento</h3>
//        ${this.builderInvestments(startup.investments)}
//       `
//     };
//     return sgMail.send(msg);
//   }
//
//   private builderMonetize(monetize: Monetize[]) {
//     return monetize.map(p =>
//       '<p><strong>Descrição</strong>' + p.description + '</p>' +
//       '<p><strong>Note</strong>' + p.note + '</p>');
//   }
//
//   private builderConcurrences(concurrences: Concurrences[]) {
//     return concurrences.map(p =>
//       '<p><strong>Nome</strong>' + p.name + '</p>' +
//       '<p><strong>Site</strong>' + p.site + '</p>');
//   }
//
//   private builderProducts(products: Products[]) {
//     return products.map(p =>
//       '<p><strong>Nome</strong>' + p.name + '</p>' +
//       '<p><strong>Objetivo</strong>' + p.objective + '</p>');
//   }
//
//   private builderCosts(costs: Costs[]) {
//     return costs.map(p =>
//       '<p><strong>Nome</strong>' + p.name + '</p>' +
//       '<p><strong>Valor</strong>' + p.value + '</p>'
//     );
//   }
//
//   private builderInvestments(investments: Investments[]) {
//     return investments.map(p =>
//       '<p><strong>Nome</strong>' + p.name + '</p>' +
//       '<p><strong>Valor</strong>' + p.value + '</p>'
//     );
//   }
// }
