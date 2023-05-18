import antlr4 from 'antlr4';
import MyGrammarLexer from './MyGrammarLexer.js';
import MyGrammarParser from './MyGrammarParser.js';
import MyGrammarListener from './MyGrammarListener.js';

const input = "your text to parse here"
const chars = new antlr4.InputStream(input);
const lexer = new MyGrammarLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MyGrammarParser(tokens);
parser.buildParseTrees = true;
const tree = parser.MyStartRule();


const _tokens = {
    'identifier': new RegExp('ident'),
    'open_keys': new RegExp('['),
    'close_keys': new RegExp(']'),
    'int_constant': new RegExp('[0-9]'),
    'float_constant': new RegExp('[0-9].[0-9]'),
    'string_constant': new RegExp('[a-z][A-Z]'),
    'null_ident': new RegExp('null'),
    'sum_ident': new RegExp('+'),
    'subtract_ident': new RegExp('-'),
    'multiplier_ident': new RegExp('*'),
    'division_ident': new RegExp('/'),
    'rest_ident': new RegExp('%'),
    'bigger_than': new RegExp('>'),
    'less_than': new RegExp('<'),
    'less_or_equal_than': new RegExp('<='),
    'bigger_or_equal_than': new RegExp('>='),
    'equal_to': new RegExp('=='),
    'not_equal_to': new RegExp('!='),
    'new_expr': new RegExp('new'),
    'int_reserved': new RegExp('int'),
    'float_reserved': new RegExp('float'),
    'string_reserved': new RegExp('string'),
    'open_chevron': new RegExp('('),
    'close_chevron': new RegExp(')'),
    'dot_and_comma': new RegExp(';'),
    'for_expr': new RegExp('for'),
    'if_expr': new RegExp('if'),
    'else_expr': new RegExp('else'),
    'return_expr': new RegExp('return'),
    'read_expr': new RegExp('read'),
    'print_expr': new RegExp('print'),
    'comma_expr': new RegExp(','),
    'attribuition_expr': new RegExp('='),
    'break_expr': new RegExp('break'),
    'open_braces': new RegExp('{'),
    'close_braces': new RegExp('}'),
    'define_func_expr': new RegExp('def')
}