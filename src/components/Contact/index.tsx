'use client'
import { Form, Input, InputNumber, Modal, Typography } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons"
import NextButton from "../NextButton";
import { useEffect, useState } from "react";
import { getRules } from "@/utils/helpers";

const { Item } = Form
const { Title } = Typography

type IPropsContact = {
    viewContact: boolean
    handleCancelContact: () => void
}

type ValuesForm = {
    name: string
    phoneNumber: number
}

export default function Contact({ viewContact, handleCancelContact }: IPropsContact) {

    const [ link, setLink ] = useState('https://wa.me/5491155058191/?text=')

    const [ form ] = Form.useForm()
    const { validateFields, resetFields } = form
    
    const handleFinish = () => {
        validateFields().then((values: ValuesForm) => {
            const message = `Buen día, soy ${values.name} y mi numeró de contacto es ${values.phoneNumber}, quisiera información.`
            const linkPublic = link + encodeURIComponent(message)
            setLink(linkPublic)
            const enlace = document.getElementById("enlace")
            enlace?.click()
        })
    }

    useEffect(() => {
        return () => {
            resetFields()
        }
    }, [])

    return (
        <Modal
            open={viewContact}
            onCancel={handleCancelContact}
            footer={null}
            width={320}
            centered
            destroyOnClose
        >
            <Title level={2} className="gx-text-center"><WhatsAppOutlined className="gx-text-success"/> Contáctanos</Title>
            <Form
                id='form-contact'
                form={form}
                onFinish={handleFinish}
                layout="vertical"
            >
                <Item label="Nombres y Apellidos" name="name" rules={getRules('Debe ingresar su Nombre completo')}>
                    <Input minLength={3}/>
                </Item>
                <Item label="Teléfono" name="phoneNumber" rules={getRules('Debe ingresar su número de teléfono')}>
                    <InputNumber className="gx-w-100" minLength={9} maxLength={9} controls={false}/>
                </Item>
                <Item>
                    <NextButton
                        text="Contactar" 
                        type="primary" 
                        htmlType="submit" 
                        block={true} 
                    />
                </Item>
            </Form>
            <a id='enlace' style={{display: 'none'}} href={link} target="_blank"></a>
        </Modal>
        
    )
}