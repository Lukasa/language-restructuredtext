.. |A|Z| replace:: **FOO**

|A|Z|.

Normal targets:
	Link:      `link-label`_
	Link: :ref:`link-label`
	
	File:      `index.html`_
	File: :ref:`index.html`


Embedded targets:
	URI:      `Landing page <index.html>`_
	URI: :ref:`Landing page <index.html>`
	
	Bare:      `<index.html>`_
	Bare: :ref:`<index.html>`

	Alias      `Link <link-label_>`_
	Alias :ref:`Link <link-label_>`
	
	Alias      `Link <label <link\<-label_>`_
	Alias :ref:`Link <label <link\<-label_>`

	.. _link-label:
	.. _link<-label: `one-liner`_


Named links:
	Named link `one-liner`_ (or one-liner_):

	.. _one-liner: https://docutils.sourceforge.io/rst.html

	Named link that `starts-on-this-line`_ (back to `landing page <index.html>`_):

	.. _starts-on-this-line: https://
		docutils.sourceforge.net/rst.html

	Named link defined `entirely-below`_:

	.. _entirely-below:
		https://docutils.
		sourceforge.net/rst.html


Anonymous links:
	Anonymous link `one-liner`__:

	.. __: https://docutils.sourceforge.io/rst.html

	Anonymous link that `starts-on-this-line`__:

	.. __: https://
		docutils.sourceforge.net/rst.html

	Anonymous link defined `entirely-below`__:

	.. __:
		https://docutils.
		sourceforge.net/rst.html


	Short anonymous link `one-liner`__:

	__ https://docutils.sourceforge.io/rst.html

	Short anonymous link that `starts-on-this-line`__:

	__ https://
		docutils.sourceforge.net/rst.html

	Short anonymous link defined `entirely-below`__:

	__
		https://docutils.
		sourceforge.net/rst.html

Indirect links:
	Unquoted:
		1 = 3: one_ == three_
		
		.. _one: two_
		.. _two: three_
		.. _three: ./3.html

	Quoted:
		1 = 3: `1/one`_ == `3/three`_
		
		.. _`1/one`: `2/two`_
		.. _`2/two`: `3/three`_
		.. _`3/three`: ./3.html

		Beware of split_ (multi-line_) targets.

		.. _next-line:
			`link target with whitespace characters`_

		.. _multi-line:
			`link target
			with whitespace
			characters`_

		.. _split: `link target
			with whitespace
			characters`_ whoops
		
		.. _linktargetwith escapedwhitespace characters:
		.. _link target with whitespace characters: ./index.html

		`link target with whitespace characters`_
		`link target
		with whitespace
		characters`_
		
		`link\ target\ with
		escaped\ whitespace
		characters`_

.. _escaped-whitespace:   ./local\ path\ with\ spaces.html
.. _unescaped-whitespace: ./local path without spaces.html


Link: (`FAQTS:
\`Computers: Programming: Languages: Python_`_)

.. _FAQTS\: `Computers\: Programming\: Languages\: Python_:
	http://python.faqts.com/

.. _Chapter One\: "Tadpole Days":

	..
		internal_:

		.. __:
		__

		.. _internal:
		.. _`internal #2`:

		.. _external:      http://external.link/1
		.. _`external #2`: http://external.link/2

		.. __: http://anonymous.target/

		__ http://anonymous.target/

		.. _hyperlink-name: link-block
		.. __: anonymous-hyperlink-target-link-block
		__ anonymous-hyperlink-target-link-block

		Clicking on this internal hyperlink will take us to the target_ below.

		.. _target:

		The hyperlink target above points to this paragraph.

		.. _target1:
		.. _target2:

		.. _Python DOC-SIG mailing list archive:
		.. _archive:
		.. _Doc-SIG: https://mail.python.org/pipermail/doc-sig/

		What the hell is `Norwegian Blue`_?

		Oh yes, the _`Norwegian Blue`.  What's, um, what's wrong with it?

		* bullet list

			.. _`second item`:

		* second item, with hyperlink target.
