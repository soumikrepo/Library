using { library.db as db } from '../db/data-model';

@path : '/LibraryService'
service LibraryService {

 entity books as projection on db.Books;
 entity Admin as projection on db.Admin;

annotate Admin with @odata.draft.enabled ;

}