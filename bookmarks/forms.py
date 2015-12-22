from django import forms


from crispy_forms.helper import FormHelper
from crispy_forms.layout import Layout, Div, Submit, HTML, Button, Row, Field
from crispy_forms.bootstrap import AppendedText, PrependedText,PrependedAppendedText, FormActions

class BookmarkForm(forms.Form):
    Title = forms.CharField(max_length=100,widget=forms.TextInput(attrs=
					{
					   'placeholder':'Url Title',

					}))
    Url = forms.CharField(max_length=100,widget=forms.TextInput(attrs=
					{
					   'placeholder':'Url',
                       'aria-describedby':'basic-addon3',
					}))
    Description = forms.CharField(widget=forms.Textarea(attrs=
                        {'placeholder':'Description',}
                        ))
    helper = FormHelper()
    helper.form_class = 'form'
    helper.form_show_labels = False
    helper.layout = Layout(
                PrependedAppendedText('Url', 'http://', '<span class="spinner"><i class="icon-refresh"></i></span>'),
                PrependedText('Title','@'),
                Field('Description', rows="3"),
                FormActions(
                    Submit('save_changes', 'Tag it', css_class="btn-primary"),
                )
        )
