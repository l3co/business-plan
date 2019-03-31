import {Startup} from './models/startup.models';
import {StartupService} from './startup.service';
import {Document, Packer, Paragraph} from 'docx';
import {saveAs} from './utils/vendors/FileSaver';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class DocsService {

  constructor(private service: StartupService) {

  }

  generate(startup: Startup) {
    const doc = new Document();

    doc.createParagraph(startup.idea).heading1();
    doc.createParagraph('\n');
    doc.createParagraph('Objetivo').heading2();
    doc.createParagraph('\n');
    doc.createParagraph(startup.objective);
    doc.createParagraph('\n');
    doc.createParagraph(`Mercado de atuação: ${startup.market}`);

    doc.createParagraph('\n');
    this.monetizeSession(startup, doc);

    doc.createParagraph('\n');
    this.concurrencesSession(startup, doc);

    doc.createParagraph('\n');
    this.productsSession(startup, doc);

    doc.createParagraph('\n');
    doc.createParagraph('Finanças\n').heading1();
    doc.createParagraph('\n');
    this.investmentSession(startup, doc);
    doc.createParagraph('\n');
    this.costsSession(startup, doc);


    const packer = new Packer();

    packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, `${startup.idea}.docx`);
      console.log('Document created successfully');
    });
  }

  private monetizeSession(startup: Startup, doc: Document) {
    doc.createParagraph('Monetização\n').heading2();
    doc.createParagraph('\n');
    const monetize = doc.createTable(startup.monetize.length + 1, 2);
    monetize.getCell(0, 0).addContent(new Paragraph('Descrição'));
    monetize.getCell(0, 1).addContent(new Paragraph('Observação'));

    startup.monetize.forEach(((value, index) => {
      const i = index + 1;
      monetize.getCell(i, 0).addContent(new Paragraph(value.description));
      monetize.getCell(i, 1).addContent(new Paragraph(value.note));
    }));
  }


  private concurrencesSession(startup: Startup, doc: Document) {
    doc.createParagraph('Concorrentes\n').heading2();
    doc.createParagraph('\n');
    const monetize = doc.createTable(startup.concurrences.length + 1, 2);
    monetize.getCell(0, 0).addContent(new Paragraph('Nome'));
    monetize.getCell(0, 1).addContent(new Paragraph('Site'));

    startup.concurrences.forEach(((value, index) => {
      const i = index + 1;
      monetize.getCell(i, 0).addContent(new Paragraph(value.name));
      monetize.getCell(i, 1).addContent(new Paragraph(value.site));
    }));
  }

  private productsSession(startup: Startup, doc: Document) {
    doc.createParagraph('Produtos\n').heading2();
    doc.createParagraph('\n');
    const monetize = doc.createTable(startup.products.length + 1, 2);
    monetize.getCell(0, 0).addContent(new Paragraph('Nome'));
    monetize.getCell(0, 1).addContent(new Paragraph('Objetivo'));

    startup.products.forEach(((value, index) => {
      const i = index + 1;
      monetize.getCell(i, 0).addContent(new Paragraph(value.name));
      monetize.getCell(i, 1).addContent(new Paragraph(value.objective));
    }));
  }


  private investmentSession(startup: Startup, doc: Document) {
    doc.createParagraph('Investimento\n').heading3();
    doc.createParagraph('\n');
    const monetize = doc.createTable(startup.investments.length + 2, 2);
    monetize.getCell(0, 0).addContent(new Paragraph('Nome'));
    monetize.getCell(0, 1).addContent(new Paragraph('Objetivo'));

    startup.investments.forEach(((value, index) => {
      const i = index + 1;
      monetize.getCell(i, 0).addContent(new Paragraph(value.name));
      monetize.getCell(i, 1).addContent(new Paragraph(`R$ ${value.value.toLocaleString('pt-BR')}`));
    }));

    monetize.getCell(startup.investments.length + 1, 1)
      .addContent(new Paragraph(`R$ ${this.service.totalInvestments(startup).toLocaleString('pt-BR')}`));
  }

  private costsSession(startup: Startup, doc: Document) {
    doc.createParagraph('Custo\n').heading3();
    doc.createParagraph('\n');
    const monetize = doc.createTable(startup.costs.length + 2, 2);
    monetize.getCell(0, 0).addContent(new Paragraph('Nome'));
    monetize.getCell(0, 1).addContent(new Paragraph('Objetivo'));

    startup.costs.forEach(((value, index) => {
      const i = index + 1;
      monetize.getCell(i, 0).addContent(new Paragraph(value.name));
      monetize.getCell(i, 1).addContent(new Paragraph(`R$ ${value.value.toLocaleString('pt-BR')}`));
    }));

    monetize.getCell(startup.costs.length + 1, 1)
      .addContent(new Paragraph(`R$ ${this.service.totalCosts(startup).toLocaleString('pt-BR')}`));
  }
}
