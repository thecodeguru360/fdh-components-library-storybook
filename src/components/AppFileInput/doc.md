## APP Form File Input Component

Based on Bootstrap File input.

**Required Props**
|Prop |Value(s) |
|--|--|
| name | string |
| register | React hook form register |
| errors | React hook form state error |

**Optional Props**
| Prop | Value(s) |
|--|--|
| id | string |
| label | string |
| required | true or false |
| onChange | function |
| maxFileSize | number in MB |
| acceptedFormats | Array of strings ex: ['pdf','docx'] |
| disabled | true or false |
| helpText | string |
| accepts | string |

Add useForm hook into your form component and pass the props to child components

    const {register, handleSubmit,formState: { errors }} = useForm<any>();

**Examples**

1.  Simple File Input.

        <AppFormFileInput name="testFile" label="Add File" register={register} errors={errors}/>

2.  File Input with validation

        <AppFormFileInput name="testFile" label="Add File" register={register} errors={errors} required maxFileSize={2} acceptedFormats={['png','jpg']}/>
