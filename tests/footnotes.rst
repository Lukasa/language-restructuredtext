.. vim: ts=4

:tocdepth: 2

Footnotes
=========
[#]_ is a reference to footnote 1, and [#]_ is a reference to
footnote 2.

.. [#] This is footnote **1**.
.. [#] This is footnote **2**.
.. [#] This is footnote **3**.

[#]_ is a reference to footnote 3.


Numbered footnote [1]_

.. [1] Manually-numbered footnote

	.. code-block:: js

		export default function(){ }

	Done.

Auto-numbered footnote [#]_

.. [#]

	Automatically-numbered footnote

Auto-numbered footnote with alphabetic [#foo]_ or numeric [#2]_ label

.. [#foo] Alphabetic label
.. [#2] Numeric label

Symbolic footnote: [*]_.

.. [*] Details of symbolic
	footnote go here.


Citations
=========

Here is a citation reference: [CIT2002]_.

.. [CIT2002] This is the citation.  It's just like a footnote,
	except the label is textual.


[bar]_
[baz_qux]_

.. [bar] Citation for **bar**.

	.. code-block:: js

		export default function(){ }

	Etc

.. [baz_qux] Citation including *underscore*
