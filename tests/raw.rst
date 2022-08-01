.. # vim: ts=4

.. raw:: html

	<samp><b>at</b>tach [<var>options</var>] <var>unit</var> <var>filename</var></samp>

.. code:: xml

	<!--- Comment -->
	<!ELEMENT array (%plistObject;)*>
	<!ELEMENT dict (key, %plistObject;)*>
	<!ELEMENT key (#PCDATA)>

.. raw:: pseudoxml

	<dict>
		<key>foo</key>
		<string>Bar</string>
	</dict>

.. raw:: text

	C:\\Users\\johng\\

.. raw:: manpage

	.TH FOO 1
	.SH NAME
	foo \(em Bar

.. raw:: tex

	\usepackage[titles]{tocloft}
	\cftsetpnumwidth {1.25cm}\cftsetrmarg{1.5cm}
	\setlength{\cftchapnumwidth}{0.75cm}
	\setlength{\cftsecindent}{\cftchapnumwidth}
	\setlength{\cftsecnumwidth}{1.25cm}

.. raw:: texinfo

	@c %**start of header (This is for running Texinfo on a region.)
	@setfilename groff.info
	@settitle The GNU Troff Manual
	@setchapternewpage odd
	@footnotestyle separate
	@c %**end of header (This is for running Texinfo on a region.)

	@documentlanguage en
	@documentencoding ISO-8859-1

.. role:: html(raw)
   :format: html

.. parsed-literal::

	:html:`<samp><b>at</b>tach [<var>options</var>] <var>unit</var> <var>filename</var></samp>`

	**// XEQ** *pname* **L** *nn* *D* *cart* **X** **X**
	│  │   │     │ │  │ │    │ │
	1  4   8    14 │ 19 21  26 28
	             16

	This shouldn't work:

	.. math::

		α_t(i) = P(O_1, O_2, … O_t, q_t = S_i λ)
