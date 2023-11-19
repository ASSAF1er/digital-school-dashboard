import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function Infos() {
    const [expanded, setExpanded] = React.useState(false)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                    <Typography sx={{ width: '33%', flexShrink: 0 }}> Présentation de l'application</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Cette application est une propriéte privée de <span className="text-blue">SEED SARL </span>
                        orientée vers la gestion de son centre de formation{' '}
                        <span className="text-blue">Digital School</span>. Il n'est donc accessible que par les gérants
                        de cette structure et ne doit etre utilisée à des fins autres que la bonne marche et
                        l'avancement de la dite structure. <br />
                        Il permet la gestion globale de cette structure au travers des différentes fonctionnalités qui y
                        sont intégrées notamment la gestion des élèves, des formations, des comptes utiliateurs de
                        l'application, la gestion de la comptabilité de la structure pour une meilleure traçabilité des
                        fonds et un tableau de bord intégré qui permet une vue panoramique de la structure en temps
                        réel.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Utilisateurs</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {' '}
                        Il existe trois types de comptes sur cette application notamment:
                        <ul>
                            <li>
                                <span className="font-bold">User:</span> c'est l'utilisateur le plus simple les seules
                                taches qu'il peut réaliser sont la gérer les étudiant , consulter la liste des
                                formations et le tableau de bord.
                            </li>
                            <li>
                                <span className="font-bold">Admin:</span> Il effectue toutes les taches du "User" ajouté
                                de la gestion de la comptabilité.
                            </li>
                            <li>
                                <span className="font-bold">Super-Admin</span>: il effectue toutes les taches du système
                                c'est-à-dire toutes les taches de l'Admin ajouté de la gestion des formations et des
                                comptes utilisateurs de l'application. c'est l'utilisateur le plus puissant.
                            </li>
                        </ul>{' '}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Règles de sécurité</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Seul le "Super-Admin" peut ajouter des comptes utilisateurs à l'application. <br />À l'ajout
                        d'un nouveau compte, l'utilisateur doit activer son compte en cliquant sur le lien envoyé à son
                        adresse Mail renseignée lors de la création de son compte <br />
                        Le Super-Admin n'a pas accès aux mots de passe des utilisateurs. Nonobstant, le mot de passe par
                        défaut lors de la création de chaque compte est <span className="text-blue">00000</span> et les
                        utilisateurs sont parailleurs appélés à le changer dès l'activation de leurs comptes.
                        <br />
                        Un utilisateur ne peut accéder à un service auquel il n'est pas autorisé.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae
                        egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
