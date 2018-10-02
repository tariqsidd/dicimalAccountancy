import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AmlStyles from "./AmlStyles";

class AML extends Component {
    render() {
        const { classes } = this.props;
        return(
            <React.Fragment>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant="display1" align="center">
                            Practice anti-money laundering/counter-terrorist financing (AML/CTF) policy
                        </Typography>
                        <React.Fragment>
                            <Grid container spacing={8}>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        1.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='headline'>
                                        General provisions
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        1.1.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        This policy document has been prepared by Decimal Accountancy Limited to outline practice policy for the implementation of the risk based approach for Anti-Money Laundering/Counter-terrorist financing (AML/CTF) and controls for AML/CTF. The practice is committed to upholding its AML/CTF obligations under the Proceeds of Crime Act 2002 (as amended), the UK Money Laundering Regulations 2007 as amended and the Terrorism Act 2000 (as amended).
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        1.2.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        The Money Laundering Reporting Officer (MLRO) for this practice is Naseem Ul Haq.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        1.3.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        The practice will provide CIMA, as its AML/CTF supervisor, with the most up to date CIMA AML/CTF Annual Return with full detail and information on AML/CTF policies and procedures.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        1.4.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        Naseem Ul Haq may review this policy at any time to ensure the practice’s approach remains up to date and relevant
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        1.5.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        All staff must read and become familiar with this policy document and the guidelines upon joining the practice and be aware of their own personal legal obligations
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        2.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='headline'>
                                        Practice risk assessment for AML/CTF purposes
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        2.1.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        A formal and documented AML/CTF risk assessment of the overall practice will be undertaken and will focus on the wider practice risk level arising from the clients, the services, the locations served, how services are delivered and any other risks to be addressed.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        2.2.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        Key specific threats of ML/TF to the practice at present are:
                                    </Typography>
                                    <ul style={{fontSize: 15}}>
                                        <li>Significant number of cash-based clients and risk of tax evasion. </li>
                                        <li>We do not provide services to clients who use offshore trust or banks. </li>
                                        <li>We do not take any cash payments of more than £300 from client. </li>
                                        <li>We do not provide services to PEPs (Politically exposed persons) or to clients based in high risk geographical locations.</li>
                                    </ul>
                                </Grid>

                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        3.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='headline'>
                                        Client due diligence (CDD)
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        3.1.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        CDD must be carried out on new clients before starting to provide services or otherwise in accordance with the provisions of regulation 9 of the Money Laundering regulations 2007.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        3.2.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        Client acceptance checklists will be prepared for all clients to provide all the relevant information which must include original documentary evidence of identity and proof of address which must be verified independently. Refer to Annex 1 for types of identification documents required for all client types.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        3.3.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        Where clients or client representatives are not met face-to-face, enhanced due diligence processes must be followed as outlined below.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        3.4.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        We use TaxCalc’s Anti-Money Laundering checking service to provide us with identity checks for all persons and officers of companies that engage our services.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        3.5.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        Clients must be checked for politically exposed person status (PEP). Checks may include:
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        3.5.1.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        a written declaration from the client that they are or are not a Politically Exposed Person once they have read the definition, and/or;
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        3.5.2.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        An online or database electronic verification check.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        3.6.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        Services must be declined if it appears that the client is being deliberately difficult in providing information for CDD, and consider making a report should be made to the MLRO (if applicable) or NCA directly.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        3.7.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        It is the policy of the practice to update CDD information every 12 months for standard/low risk clients, to ensure that information is up to date and in accordance with the requirements of regulation 7 of the ML regulations 2007.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        4.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='headline'>
                                        Beneficial ownership
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        4.1.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        Clients must be checked for the existence of any beneficial owners i.e. Persons who hold or control over 25% of the shares or voting rights or otherwise exercise control over the management of the company.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        4.2.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        Where applicable, names, dates of birth and addresses of all beneficial owners must be received and recorded by the relevant staff member responsible for the client relationship acceptance or sign-off.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        4.3.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        In higher risk cases, staff must verify the identities of such beneficial owners, including refer to Companies House website (incl. Persons with Significant Control (PSC) register) to verify the ownership and control structure of entities and may also supplement this process with checks using additional face-to-face meetings and/or an online or database electronic verification check to verify the identity of beneficial owners by TaxCalc’s Anti-Money Laundering checking service.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        5.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='headline'>
                                        Enhanced due diligence measures (EDD)
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        5.1.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        EDD measures to be applied include ensuring that the customer’s identity and source of funds/wealth is verified by additional documents, data or information such as those outlined in Annex 1.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        5.2.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        Additional processes should include at least one additional document from Annex 1 or one or more of the following: [obtaining certified copies of identification / proof of address; an electronic database check; communicating with the customer in writing at their verified/confirmed residential address and requiring them to return a completed or signed/acknowledgement without alteration].
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        5.3.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        Higher risk clients must be subjected to more frequent and in-depth scrutiny of activity and source of funds/wealth/income.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        6.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='headline'>
                                        Purpose and intended nature of a business relationship
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        6.1.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        The client file should include information on: the nature, size and volume of business done by the client; the anticipated nature of the relationship; nature and details of the business/occupation/employment; the expected source and origin of any funds to be used in the relationship; copies of recent and current financial statements. Generic statements should be avoided and details provided and supported by documentation.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        6.2.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        The practice Terms of Engagement/Contract for Services must outline the services to be provided with sufficient detail to understand the intended nature and purpose of the relationship/services to be provided.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        7.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='headline'>
                                        Ongoing monitoring of clients
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        7.1.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        We have an obligation to scrutinise transactions, services provided/requested, source of funds and other elements of knowledge collected in the customer due diligence process, to ensure the new information is consistent with other knowledge of the client.  We also have a duty to keep the documentation concerning the client and the relationship update to date.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        7.2.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        Should the client request additional or different services it may be necessary to carry out new or enhanced client due diligence checks to ensure that the practice has a good understanding of the source of wealth, the source of funds or the intended purpose of the new relationship.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        7.3.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        Where something unusual or inconsistent is spotted, the MLRO must be formally notified immediately, the issue must be investigated and the practitioner must consider whether a suspicious activity report should be filed to the National Crime Agency (NCA.)
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        7.4.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        CDD checks including identification documents will be refreshed every 12 months to ensure that documents remain valid and up-to-date.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        7.4.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        CDD checks including identification documents will be refreshed every 12 months to ensure that documents remain valid and up-to-date.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        8.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='headline'>
                                        Appointment of money laundering reporting officer (MLRO)
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        8.1.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        The MLRO must monitor the adequacy of systems and controls in place to minimise the risk of ML/TF. The MLRO must exercise due skill care and attention in analysing internal suspicious activity reports.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        8.2.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        The MLRO is responsible for ensuring staff receive appropriate training on AML/CTF
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        8.3.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        The MLRO has responsibility for the ownership and oversight of AML/CTF policy and to ensure that AML/CTF systems and controls are appropriate. The MLRO must ensure that any suspicious activity reports (SARs) to the National Crime Agency are consistent and recorded centrally and confidentially.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        9.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='headline'>
                                        Suspicious activity reporting
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        9.1.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        All staff must report knowledge or suspicion, or where there are reasonable grounds for having knowledge or suspicion, that another person is engaged in money laundering, or terrorist financing. This is a personal obligation for every member of staff and failure to do so is an offence punishable by up to 5 years’ imprisonment. Internal reports should be made in writing by email directly to the MLRO
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        9.2.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        A suspicious activity report will be submitted to the NCA where required.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        9.3.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        The reasons why a Suspicious Activity Report (SAR) was, or was not, submitted will be recorded in a confidential and separate place from the client file, with sufficient details and reasons for the course taken, for a period of 5 years.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        9.4.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        All staff must be aware that it is an offence to disclose that a Suspicious Activity Report (SAR) to the NCA has been made about a client, punishable by up to 5 years’ imprisonment. (Tipping-off offence – Proceeds of Crime Act section 333A).
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        10.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='headline'>
                                        Training
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        10.1.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        All staff must receive training/training manuals on their AML/CTF obligations and how it relates to their day- to-day duties. Training will be provided by Naseem Ul Haq to all new staff. Refresher training will be provided every 12 months, after an incident or breach, following regulatory changes or otherwise on a risk-sensitive basis to be determined by management and MLRO.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        10.2.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        Records of attendance lists and dates of training must be kept and details of what was covered in the session included.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        11.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='headline'>
                                        Record keeping
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        11.1
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        The following records must be kept for 5 years from date we stop providing services to the client (i.e. end of the business relationship)
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        11.1.1
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        CDD documentation and supporting information.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        11.1.2
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        Training records for all relevant staff.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        11.1.3
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        Records of internal suspicious transactions reports (if applicable).
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        11.2
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        Records of any Suspicious Activity Reports (SAR) made to the NCA and reasons for the report are also to be kept for 5 years and should be recorded separately from the client file.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </React.Fragment>
                    </Paper>
                </main>
            </React.Fragment>
        )
    }
}
AML.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(AmlStyles)(AML);
