.. See: https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#inline-markup-recognition-rules

.. code:: coffeescript

	# Patterns for asserting valid conditions for starting/terminating inline markup
	before: "(?:^|(?<=[-:/'\"<\x28\\\x5B{\\s])|(?<![\\x00-\\x9F])(?<=[\\p{Ps}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))"
	after:  "(?=$|[-.,:;!?\\\\/'\"\x29\\\x5D}>\\s]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}])"


Bold
====
***BOLD WITH ASTERISKS***

**Bold ** text**

-**Bold**#
text**

“**Bold text**”

(Normal) #**Not bold**

(Normal) ** Not bold **


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
