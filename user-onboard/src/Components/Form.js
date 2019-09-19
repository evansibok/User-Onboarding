import React from 'react';

// We want to create a form to onboard a new user to our system.We need _at least_ the following pieces of information about our new user:

// - Name
// - Email
// - Password
// - Terms of Service(checkbox)
// - A Submit button to send our form data to the server.


function onBoardForm() {

    return (
        <Formik

            render={props => {
                return (
                    <Form>
                        <div>
                            <Field name="name" type="text" placeholder="Enter Name" />
                        </div>

                        <div>
                            <Field name="email" type="text" placeholder="Enter Email" />
                        </div>

                        <div>
                            <Field name="password" type="text" placeholder="Enter Password" />
                        </div>
                        <button type="submit">Submit</button>
                    </Form>
                )
            }}
        />
    )
}

export default onBoardForm;