.. See: https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#inline-markup-recognition-rules

.. code:: coffeescript

	# Patterns for asserting valid conditions for starting/terminating inline markup
	before: "(?:^|(?<=[-:/'\"<\x28\\\x5B{\\s«»༺⟬⟮⸠⸡⸢⸤⸦⸨‚„‟‛])|(?<![\\x00-\\x9F])(?<=[\\p{Ps}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))"
	after:  "(?=$|[-.,:;!?\\\\/'\"\x29\\\x5D}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}])"

.. raw:: html

	<style>.field-list > dd > p > em{ text-decoration: underline; }</style>


Punctuation
===========

None of the following lines should contain inline markup:
	| 2 * x a ** b (* BOM32_* ` `` _ __ |
	| ||
	| "*" '|' (*) [*] {*} <*> ‘*’ ‚*‘ ‘*‚ ’*’ ‚*’ “*” „*“ “*„ ”*” „*” »*« ›*‹ «*» »*» ›*›
	| 2*x a**b O(N**2) e**(x*y) f(x)*f(y) a|b file*.* __init__ __init__()
	| «*» »*« ༼*༽ ᚛*᚜ ‹*› ›*‹ ⁅*⁆ ⁽*⁾ ₍*₎ 〈*〉 ❨*❩ ❪*❫ ❬*❭ ❮*❯ ❰*❱ ❲*❳ ❴*❵
	| ⟅*⟆ ⟦*⟧ ⟨*⟩ ⟪*⟫ ⦃*⦄ ⦅*⦆ ⦇*⦈ ⦉*⦊ ⦋*⦌ ⦍*⦐ ⦏*⦎ ⦑*⦒ ⦓*⦔ ⦕*⦖ ⦗*⦘ ⧘*⧙ ⧚*⧛ ⧼*⧽ ⸂*⸃ ⸃*⸂
	| ⸄*⸅ ⸅*⸄ ⸉*⸊ ⸊*⸉ ⸌*⸍ ⸍*⸌ ⸜*⸝ ⸝*⸜ 〈*〉 《*》 「*」 『*』 【*】 〔*〕 〖*〗 〘*〙 〚*〛
	| ﹙*﹚ ﹛*﹜ ﹝*﹞ （*） ［*］ ｛*｝ ｟*｠ ｢*｣

The following lines should each contain a single inline markup string:
	| *2 * x  *a **b *.txt*
	| *2*x a**b O(N**2) e**(x*y) f(x)*f(y) a*(1+2)*

Some punctuation is allowed around inline markup:
	| /*emphasis*/, -*emphasis*-, and :*emphasis*: (Delimiters)
	| (*emphasis*), [*emphasis*], <*emphasis*>, {*emphasis*} (Open/close pairs)
	| *emphasis*., *emphasis*,, *emphasis*!, and *emphasis*\ (Closing delimiters)
	| *emphasis**? (Unbalanced end-string)

Other punctuation *isn't* allowed around inline markup:
	| )*emphasis*(, ]*emphasis*[, >*emphasis*>, }*emphasis*{ (Close/open pairs)
	| (*), [*], '*' or '"*"' ("Quoted" start-string)
	| x*2* or 2*x* (Alphanumeric char before)
	| \*args or * (Escaped, whitespace behind start-string)
	| or *the\* *stars\* *inside* (Escaped, whitespace before end-string)


Quotes around inline markup are allowed:
	:ASCII:         '*emphasis*' "*emphasis*"
	:English:       ‘*emphasis*’ “*emphasis*”
	:French:        « *emphasis* » ‹ *emphasis* › « *emphasis* » ‹ *emphasis* › « *emphasis* » ‹ *emphasis* ›
	:German:        „*emphasis*“ ‚*emphasis*‘ »*emphasis*« ›*emphasis*‹
	:Romanian:      „*emphasis*” «*emphasis*»
	:Greek:         “*emphasis*„ ‘*emphasis*‚
	:Chinese:      「*emphasis*」 『*emphasis*』
	:Scandinavian:  ”*emphasis*” ’*emphasis*’ »*emphasis*» ›*emphasis*›
	:Polish:        „*emphasis*” ‚*emphasis*’
	:Hungarian:     „*emphasis*” »*emphasis*« ’*emphasis*’

All mirrored character pairs:
	:Recognised:
		‹*emphasis*›
		›*emphasis*‹
		«*emphasis*»
		»*emphasis*«
		（*emphasis*）
		﹙*emphasis*﹚
		⁽*emphasis*⁾
		₍*emphasis*₎
		［*emphasis*］
		｛*emphasis*｝
		﹛*emphasis*﹜
		༺*emphasis*༻
		༼*emphasis*༽
		᚛*emphasis*᚜
		⁅*emphasis*⁆
		⧼*emphasis*⧽
		⦃*emphasis*⦄
		⦅*emphasis*⦆
		｟*emphasis*｠
		⦇*emphasis*⦈
		⦉*emphasis*⦊
		⦋*emphasis*⦌
		⦍*emphasis*⦐
		⦏*emphasis*⦎
		⦑*emphasis*⦒
		⦓*emphasis*⦔
		⦕*emphasis*⦖
		⦗*emphasis*⦘
		⟅*emphasis*⟆
		⟦*emphasis*⟧
		⟨*emphasis*⟩
		⟪*emphasis*⟫
		⟬*emphasis*⟭
		⟮*emphasis*⟯
		❨*emphasis*❩
		❪*emphasis*❫
		❬*emphasis*❭
		❮*emphasis*❯
		❰*emphasis*❱
		❲*emphasis*❳
		❴*emphasis*❵
		⸂*emphasis*⸃
		⸃*emphasis*⸂
		⸄*emphasis*⸅
		⸅*emphasis*⸄
		⸉*emphasis*⸊
		⸊*emphasis*⸉
		⸌*emphasis*⸍
		⸍*emphasis*⸌
		⸜*emphasis*⸝
		⸝*emphasis*⸜
		⸠*emphasis*⸡
		⸡*emphasis*⸠
		⸢*emphasis*⸣
		⸤*emphasis*⸥
		⸦*emphasis*⸧
		⸨*emphasis*⸩
		〈*emphasis*〉
		〈*emphasis*〉
		《*emphasis*》
		「*emphasis*」
		｢*emphasis*｣
		『*emphasis*』
		【*emphasis*】
		〔*emphasis*〕
		﹝*emphasis*﹞
		〖*emphasis*〗
		〘*emphasis*〙
		〚*emphasis*〛
		⧘*emphasis*⧙
		⧚*emphasis*⧛
	:Exceptions:
		⌈*emphasis*⌉
		⌊*emphasis*⌋


Consult the source code of Doctools for more tests:
 :file:`/Users/Alhadis/Forks/docutils/docutils/test/test_parsers/test_rst/test_inline_markup.py`


Bold
====
***BOLD WITH ASTERISKS***

**Bold ** text**

-**Bold**#
text**

“**Bold text**”

(Normal) #**Not bold**

(Normal) ** Not bold **

Strong asterisk: *****

Strong double asterisk: ******

Italic
======
*Italic * text*

-*Italic*#
text*

“*Italic text*”

(Normal) #*Not italic*

(Normal) * Not italic *


Literal
=======
``Literal `` text``

``Literal
text spanning
multiple lines``.

-``Literal``#
text``

<``Literal text``>

(Normal) `` Not literal ``

Source code for the above line: ````Literal text````

Monospaced pair of backticks: ``````


.. _Multi-line `_link reference: literal_

`Multi-line
`_link
reference`_

Interpreted text
================
.. |foo| replace:: **FOO**

This is -`interpreted text` or|foo|.


abbr
----
Interpreted: :abbr:`B`T (Back`ticks)`;

Uninterpreted: :abbr:` B`T (Back`ticks)`

code
----
Interpreted: :code:`$ sh -c some-`command``;

Uninterpreted: :code: `$ sh -c some-`command``;

command
-------
Interpreted: :code:`grotty`, :code:`stupid`command`name`;

Uninterpreted: :code: `grotty`;

dfn
---
Interpreted: :dfn:`back`tick`s`

Uninterpreted: :dfn: `back`tick`s`


emphasis
--------
Interpreted: :emphasis:`emphasised`text`

Uninterpreted: :emphasis: `emphasised`text`
