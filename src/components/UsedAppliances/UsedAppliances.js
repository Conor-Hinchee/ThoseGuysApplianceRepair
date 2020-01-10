import React, {useState} from 'react';
import { ModalContainer, ModalRoute } from 'react-router-modal';
import { Redirect } from 'react-router';
import { Container} from 'reactstrap';
import classes from './UsedAppliances.module.css';
import Navigation from '../UI/Navigation/Navigation';
import Refinishing from './Refinishing/Refinishing';
import Sales from './Sales/Sales';
import Recycle from './Recycle/Recycle';
import UsedApplianceModal from './UsedApplianceModal/UsedApplianceModal';
import Footer from '../UI/Footer/Footer';

const UsedAppliances = () => {
   
	const [modalIsOpen, setIsModalOpen] = useState(false);
	const [modalView, setModalView] = useState("");

	const toggleModal = () => setIsModalOpen(!modalIsOpen);
	const onButtonTypeClick = (id) => {
		setModalView(id);
		setIsModalOpen(!modalIsOpen);
	}
	
	return (
		<>
			{!modalIsOpen && (
                <Redirect push to="/usedappliances" />    
			)}
			
			<Navigation
				sticky = {false} 
				navigationLinks = {[
				{
					link : "/",
					title : "Home"
				},{
					link : "#refinishing",
					title : "Refinishing"
				},{
					link : "#sales",
					title : "Used Appliance Sales" 
				},{
					link : "#recycle",
					title : "Recycling"
				}
			]}
			/>
			<main>
				<Container>
					<section className={classes.Space} id="sales">
						<Sales 
							showContactModal={onButtonTypeClick}
						/>
					</section>
					<section className={classes.Space} id="refinishing">
						<Refinishing 
							showContactModal={onButtonTypeClick}
						/>
					</section>
					<section className={classes.Space} id="recycle">
						<Recycle 
							showContactModal={onButtonTypeClick}
						/>
					</section>
					<ModalRoute path='/usedappliances/messageus/:type' parentPath='/usedappliances'>
						<UsedApplianceModal 
							toggle={toggleModal}
							display={modalView}
						/>
					</ModalRoute>
					<ModalContainer />
				</Container>
			</main>
			<Footer />
		</>	 
 	)
};

export default UsedAppliances;