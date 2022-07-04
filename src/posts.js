import * as React from 'react';
import {
    Datagrid,
    EditButton,
    List,
    SimpleList,
    ReferenceField,
    TextField,
    Edit,
    Create,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextInput,
    useRecordContext,
} from 'react-admin';

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users">
        <SelectInput optionText="name" />
    </ReferenceInput>,
];

export const PostList = props => (
    <List filters={postFilters}>
        <SimpleList
            primaryText={record => record.title}
            secondaryText={record => (
                <ReferenceField label="User" source="userId" reference="users">
                    <TextField source="name" />
                </ReferenceField>
            )}
        />
        {/* <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <EditButton />
        </Datagrid> */}
    </List>
);

const PostTitle = () => {
    const record = useRecordContext();
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = props => (
    <Edit title={<PostTitle />}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);