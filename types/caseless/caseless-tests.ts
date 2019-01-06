import caseless, { Caseless, httpify, Httpified } from "caseless";

new Caseless(); // $ExpectError

// tslint:disable-next-line: prefer-const
let c1: Caseless;

caseless(); // $ExpectType Caseless
caseless({}); // $ExpectType Caseless
caseless(null); // $ExpectError
caseless(1); // $ExpectError
caseless("2"); // $ExpectError

const c2 = caseless();

c2.set({}); // $ExpectType void
c2.set('foo', 'bar'); // $ExpectType string | false
c2.set('foo', 'bar', false); // $ExpectType string | false
c2.set('foo', new Date()); // $ExpectType string | false
c2.set(10, 'bar'); // $ExpectError

c2.get('foo'); // $ExpectType any
c2.get(10); // $ExpectError

c2.has('foo'); // $ExpectType string | false
c2.has(10); // $ExpectError

c2.swap('foo'); // $ExpectType void
c2.swap(10); // $ExpectError

c2.del('foo'); // $ExpectType boolean

httpify(null, {}); // $ExpectError
httpify(1, {}); // $ExpectError
httpify("2", {}); // $ExpectError
httpify({}, null); // $ExpectError
httpify({}, 1); // $ExpectError
httpify({}, "2"); // $ExpectError

httpify({}, {}); // $ExpectType Caseless

const request: Httpified = {}; // $ExpectError

request.setHeader({}); // $ExpectType void
request.setHeader('foo', 'bar'); // $ExpectType string | false
request.setHeader('foo', 'bar', false); // $ExpectType string | false
request.setHeader('foo', new Date()); // $ExpectType string | false
request.setHeader(10, 'bar'); // $ExpectError

request.getHeader('foo'); // $ExpectType any
request.getHeader(10); // $ExpectError

request.hasHeader('foo'); // $ExpectType string | false
request.hasHeader(10); // $ExpectError

request.removeHeader('foo'); // $ExpectType boolean
request.headers = {};
