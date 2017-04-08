Change Log
==========

This project adheres to [Semantic Versioning](http://semver.org).

[Unpublished]: https://github.com/Lukasa/language-restructuredtext/compare/v1.1.0...HEAD


[v1.1.0]
------------------------------------------------------------------------
* Added this change-log
* Added editor command to update length of borders to fit their title
* Disabled line-highlighting limit introduced in [Atom 1.15][#13820].
* [[`#52`][]]: Fixed highlighting of code directives containing colons

[v1.1.0]: https://github.com/Lukasa/language-restructuredtext/releases/tag/v1.1.0
[`#52`]:  https://github.com/Lukasa/language-restructuredtext/issues/52
[#13820]: https://github.com/atom/atom/pull/13820


[v1.0.2]
------------------------------------------------------------------------
**February 1st, 2017**  
* [[`#49`][]]: Added scopes to angle brackets and manpage references
* [[`#51`][]]: Added `:` and `+` as recognised link-reference characters
* Fixed incorrect highlighting of links using double underscores

[v1.0.2]: https://github.com/Lukasa/language-restructuredtext/releases/tag/v1.0.2
[`#49`]:  https://github.com/Lukasa/language-restructuredtext/issues/49
[`#51`]:  https://github.com/Lukasa/language-restructuredtext/issues/51


[v1.0.1]
------------------------------------------------------------------------
**October 13th, 2016**  
* [[`#46`][]]: Added `-` to supported tag-name characters
* [[`#47`][]]: Fixed bugs with matching backslashes in embedded Python
* Fixed incorrect scope added to embedded XML blocks

[v1.0.1]: https://github.com/Lukasa/language-restructuredtext/releases/tag/v1.0.1
[`#46`]:  https://github.com/Lukasa/language-restructuredtext/issues/46
[`#47`]:  https://github.com/Lukasa/language-restructuredtext/issues/47


[v1.0.0]
------------------------------------------------------------------------
**July 22nd, 2016**  
* [[`#45`][]]: Highlighting added to embedded TeX equations
* Enforcement of [semantic versioning](http://semver.org) introduced

[v1.0.0]: https://github.com/Lukasa/language-restructuredtext/releases/tag/v1.0.0
[`#45`]:  https://github.com/Lukasa/language-restructuredtext/issues/45


[v0.16.0]
------------------------------------------------------------------------
**June 5th, 2016**  
Entire grammar rehauled by [`#41`][]:

* [[`#13`][]]: Added missing support for Sphinx domains
* [[`#20`][]]: Removed Markdown scope used by grammar's scope-name
* [[`#30`][]]: Fixed incomplete support for section underlines
* [[`#34`][]]: Extended readme file and package metadata
* [[`#35`][]]: Fixed buggy autocompletion of package snippets
* Added `code` snippet to insert a `.. code-block` statement
* Added highlighting for escaped characters (e.g., `\|`)
* Added support for `.code` directives
* Added support for multiline comments
* Fixed `|` characters underlined and mistaken for links in table rows
* Fixed code-blocks not being highlighted as directive statements
* Fixed faulty matching of grid-table borders beyond first row
* Fixed generic Sphinx domains highlighted as comments
* Highlighting of substitution references vastly improved
* Multiline footnotes now supported
* Shading added to borders for themes which highlight punctuation scopes
* Various other improvements made to highlighting and matching accuracy

[v0.16.0]: https://github.com/Lukasa/language-restructuredtext/releases/tag/v0.16.0
[`#13`]:   https://github.com/Lukasa/language-restructuredtext/issues/13
[`#34`]:   https://github.com/Lukasa/language-restructuredtext/issues/34
[`#20`]:   https://github.com/Lukasa/language-restructuredtext/issues/20
[`#30`]:   https://github.com/Lukasa/language-restructuredtext/issues/30
[`#35`]:   https://github.com/Lukasa/language-restructuredtext/issues/30
[`#41`]:   https://github.com/Lukasa/language-restructuredtext/pull/41


[v0.15.0]
------------------------------------------------------------------------
**May 24th, 2016**  
* [[`#39`][]]: Added pattern-matching for Doctest blocks

[v0.15.0]: https://github.com/Lukasa/language-restructuredtext/releases/tag/v0.15.0
[`#39`]:   https://github.com/Lukasa/language-restructuredtext/issues/30


[v0.14.0]
------------------------------------------------------------------------
**May 24th, 2016**  
* [[`#38`][]]: Fixed [broken highlighting][#22] of indented code-blocks

[v0.14.0]: https://github.com/Lukasa/language-restructuredtext/releases/tag/v0.14.0
[`#38`]:   https://github.com/Lukasa/language-restructuredtext/pull/38
[#22]:     https://github.com/Lukasa/language-restructuredtext/pull/22


[v0.13.0]
------------------------------------------------------------------------
**April 4th, 2016**  
* [[`#36`][]]: Fixed bug with highlighting escaped characters like `\*`

[v0.13.0]: https://github.com/Lukasa/language-restructuredtext/releases/tag/v0.13.0
[`#36`]:   https://github.com/Lukasa/language-restructuredtext/pull/36


[v0.12.0]
------------------------------------------------------------------------
**January 14th, 2016**
* [[`#31`][]]: Added support for `:` `.` `'` and `_` in heading borders
* Added `source.embedded.python` to scopes used for embedded Python
* Added `source.embedded` to scopes applied to code-blocks
* Fixed incorrect escaping

[v0.12.0]: https://github.com/Lukasa/language-restructuredtext/releases/tag/v0.12.0
[`#31`]:   https://github.com/Lukasa/language-restructuredtext/pull/31


[v0.11.0]
------------------------------------------------------------------------
**December 11th, 2015**  
* Added tab-stops to link snippet

[v0.11.0]: https://github.com/Lukasa/language-restructuredtext/releases/tag/v0.11.0


[v0.10.0]
------------------------------------------------------------------------
**November 20th, 2015**  
* [[`#26`][]]: Added comma to grammar's `scopeName`

[v0.10.0]: https://github.com/Lukasa/language-restructuredtext/releases/tag/v0.10.0
[`#26`]:   https://github.com/Lukasa/language-restructuredtext/pull/26


[v0.9.0]
------------------------------------------------------------------------
**September 9th, 2015**  
* [[`#21`][]]: Markdown scopes added to grammar's `scopeName`

[v0.9.0]: https://github.com/Lukasa/language-restructuredtext/releases/tag/v0.9.0
[`#21`]:  https://github.com/Lukasa/language-restructuredtext/pull/21


[v0.8.0]
------------------------------------------------------------------------
**September 8th, 2015**  
* Fixed snippet selector

[v0.8.0]: https://github.com/Lukasa/language-restructuredtext/releases/tag/v0.8.0


[v0.7.0]
------------------------------------------------------------------------
**July 16th, 2015**
* Fixed bug with matching link references containing slashes

[v0.7.0]: https://github.com/Lukasa/language-restructuredtext/releases/tag/v0.7.0


[v0.6.0]
------------------------------------------------------------------------
**May 19th, 2015**  
* [[`#17`][]]: Fixed incorrect matching of `**` sequences

[v0.6.0]: https://github.com/Lukasa/language-restructuredtext/releases/tag/v0.6.0
[`#17`]:  https://github.com/Lukasa/language-restructuredtext/pull/17


[v0.5.0]
------------------------------------------------------------------------
**April 22nd, 2015**  
* [[`#12`][]]: Improved italics matching
* [[`#14`][]]: Added [`demo.rst`](./demo.rst)
* Scoped properties moved to package's `settings` directory

[v0.5.0]: https://github.com/Lukasa/language-restructuredtext/releases/tag/v0.5.0
[`#12`]:  https://github.com/Lukasa/language-restructuredtext/pull/12
[`#14`]:  https://github.com/Lukasa/language-restructuredtext/pull/14


[v0.4.0]
------------------------------------------------------------------------
**April 1st, 2015**  
* [[`#10`][]]: `gfm` added to grammar's `scopeName`

[v0.4.0]: https://github.com/Lukasa/language-restructuredtext/releases/tag/v0.4.0
[`#10`]:  https://github.com/Lukasa/language-restructuredtext/pull/10


[v0.3.0]
------------------------------------------------------------------------
**March 4th, 2015**  
* [[`#6`][]]: Section snippets amended to use fixed-length underlines
* Added support for tags containing full-stops/periods

[v0.3.0]: https://github.com/Lukasa/language-restructuredtext/releases/tag/v0.3.0
[`#6`]:   https://github.com/Lukasa/language-restructuredtext/pull/6


[v0.2.0]
------------------------------------------------------------------------
**May 21st, 2014**  
* [[`#2`][]]: Added package description for search results
* [[`#4`][]]: Added syntax highlighting for embedded code blocks
* Added auto-indentation for literal code-blocks

[v0.2.0]: https://github.com/Lukasa/language-restructuredtext/releases/tag/v0.2.0
[`#2`]:   https://github.com/Lukasa/language-restructuredtext/pull/2
[`#4`]:   https://github.com/Lukasa/language-restructuredtext/pull/4


[v0.1.0]
------------------------------------------------------------------------
**March 4th, 2014**  
Initial release.

[v0.1.0]: https://github.com/Lukasa/language-restructuredtext/releases/tag/v0.1.0
