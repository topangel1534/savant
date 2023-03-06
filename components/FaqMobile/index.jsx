import Image from 'next/image'
import Link from 'next/link'
import { Accordion } from 'react-bootstrap';

export const FaqMobile = (props) => {
    return (
        <div className='faqMblRow'>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Minimum Investment Amount?</Accordion.Header>
                    <Accordion.Body>
                        <h3 className='desktop'>Minimum Investment Amount?</h3>
                        <p className='desktop'>The minimum investment amount for properties on our platform varies based on the Offering. However, you can invest in a fraction of a property for as little as $25. We understand that real estate investing can be a big step for some individuals, especially those who are new to the process or have limited funds. That&apos;s why we strive to provide accessible options for all types of investors, regardless of their financial situation. By keeping our minimum investment amount low, we hope to make the process as easy and accessible as possible for everyone interested in investing in real estate. It allows more people to have the chance to invest in properties they might not be able to purchase on their own, and it allows them to diversify their investment options in the real estate market. With a low barrier of entry, we believe that more people will be able to experience the benefits of real estate investing and reap the rewards in the long run.</p>
                        <p className='mobile'>At Savant, we believe that real estate investing should be accessible to everyone, regardless of their financial situation. That's why we offer low minimum investment amounts - as little as $100 - so that anyone can invest in a fraction of a property and diversify their investment portfolio with ease. With this approach, we hope to empower more people to invest in exclusive properties that they might not be able to afford on their own and enjoy the long-term benefits of real estate investing.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Who pays for maintenance expenses?</Accordion.Header>
                    <Accordion.Body>
                        <h3 className='desktop'>Who pays for maintenance expenses?</h3>
                        <p className='desktop'>The maintenance expenses for the properties on our platform are primarily the responsibility of the property owners. However, as a way to ensure that properties are well-maintained and to protect the interests of our investors, we require all properties to be funded with a 5% operational expense reserve for maintenance. Additionally, 5% of the cash flow generated by each property every month is allocated towards the maintenance reserve. This way, we can ensure that any necessary repairs or maintenance are taken care of in a timely manner and that the properties continue to generate income for our investors. We understand that the maintenance of the properties is crucial to the success of the investments, and we strive to make it as seamless and stress-free as possible for our users.</p>
                        <p className='mobile'>At Savant, we take property maintenance seriously and understand its impact on our investors' returns. To ensure top-notch maintenance and protection of our investors' interests, we require a 5% operational expense reserve for every property on our platform, funded by 5% of the cash flow generated monthly. This way, we can swiftly address any maintenance issues that may arise and safeguard our investors' investments. With our seamless and stress-free approach to property maintenance, you can rest assured that your investments are in safe hands with Savant.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Do I need to be accredited to invest?</Accordion.Header>
                    <Accordion.Body>
                        <h3 className='desktop'>Do I need to be accredited to invest?</h3>
                        <p className='desktop'>Investing in real estate through our platform does not require accreditation, unlike traditional real estate investment options. This is thanks to the concept of fractional ownership, which allows for more affordable entry into the market and enables investors to share risks and responsibilities. This makes it a more accessible and secure investment option for a wider range of individuals.</p>
                        <p className='mobile'>At Savant, we're democratizing real estate investing by making it accessible to anyone. Our fractional ownership model means that you don't need to be an accredited investor to enjoy the benefits of real estate investing. With lower entry costs and shared risks and responsibilities, our platform enables a wider range of individuals to invest in properties and reap the rewards. Say goodbye to traditional investment options and hello to a more inclusive and secure approach to real estate investing with Savant.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>How often are dividends sent to holders?</Accordion.Header>
                    <Accordion.Body>
                        <h3 className='desktop'>How often are dividends sent to holders?</h3>
                        <p className='desktop'>Dividends are typically paid out on a monthly basis to holders of our fractional property investments. These payments are calculated based on the net cash flow of the property and distributed according to the percentage of ownership held by each investor. Additionally, we provide transparent and regular updates on the financial performance of each property, allowing our investors to stay informed and track the performance of their investment. We also have a dedicated team available to answer any questions and provide support throughout the investment process, ensuring that our investors feel confident and informed every step of the way.</p>
                        <p className='mobile'>With Savant's platform, you can enjoy the steady flow of monthly dividends from our fractional property investments. Our transparent and detailed updates on the financial performance of each property keep you informed and enable you to track your investment's progress. Plus, with our dedicated team of experts, you can rest assured that you'll receive top-notch support and guidance throughout your investment journey. Enjoy the peace of mind that comes with having a knowledgeable and supportive team by your side as you build your investment portfolio.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>What are my tax obligations?</Accordion.Header>
                    <Accordion.Body>
                        <h3 className='desktop'>What are my tax obligations?</h3>
                        <p className='desktop'>Investing in fractional real estate can have tax implications, just like any other type of investment. However, the specifics of your tax obligations will depend on your individual circumstances and should be discussed with a tax professional. In general, any income received from the investment, such as rental income or capital gains from the sale of the property, will be subject to taxation. Additionally, you may be eligible for certain tax benefits, such as deductions for mortgage interest, depreciation of the property, or 1031 exchanges. It&apos;s important to keep accurate records and consult with a tax advisor to understand your specific obligations and take advantage of any potential tax benefits.</p>
                        <p className='mobile'>At Savant, we understand that tax obligations can be a complex topic when it comes to real estate investing. That's why we encourage all investors to seek the guidance of a tax professional to ensure they stay on top of their obligations and maximize any potential tax benefits. From rental income to capital gains, our platform enables you to benefit from a range of investment returns that may have tax implications. But with our user-friendly platform and expert support, you can stay informed, make the most of any potential tax benefits, and invest in real estate with confidence.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}