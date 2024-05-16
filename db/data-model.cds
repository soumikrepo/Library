namespace library.db;

using {cuid} from '@sap/cds/common';

entity Books : cuid {
    title    : String;
    author   : String;
    isbn     : String;
    quantity : Integer;
}

