-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 07, 2021 at 07:06 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_appcv`
--

-- --------------------------------------------------------

--
-- Table structure for table `appserverprojects`
--

CREATE TABLE `appserverprojects` (
  `idAppServerProject` varchar(255) NOT NULL,
  `idAppServer` varchar(255) NOT NULL,
  `idProject` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `appservers`
--

CREATE TABLE `appservers` (
  `idAppServer` varchar(255) NOT NULL,
  `nameAppServer` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `apptypeprojects`
--

CREATE TABLE `apptypeprojects` (
  `idAppTypeProject` varchar(255) NOT NULL,
  `idAppType` varchar(255) NOT NULL,
  `idProject` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `apptypes`
--

CREATE TABLE `apptypes` (
  `idAppType` varchar(255) NOT NULL,
  `nameAppType` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `idCompany` varchar(255) NOT NULL,
  `nameCompany` varchar(50) NOT NULL,
  `addressCompany` varchar(200) DEFAULT NULL,
  `contactCompany` varchar(20) DEFAULT NULL,
  `priodFrom` date NOT NULL,
  `priodTo` date DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  `idPerson` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `idCourse` varchar(255) NOT NULL,
  `titleCourse` varchar(100) NOT NULL,
  `providerCourse` varchar(100) NOT NULL,
  `placeCourse` varchar(50) DEFAULT NULL,
  `dateCourse` date NOT NULL,
  `durationCourse` int(11) NOT NULL,
  `certificateCourse` varchar(10) DEFAULT NULL,
  `idPerson` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `idCustomer` varchar(255) NOT NULL,
  `nameCustomer` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `databaseprojects`
--

CREATE TABLE `databaseprojects` (
  `idDatabaseProject` varchar(255) NOT NULL,
  `idDatabase` varchar(255) NOT NULL,
  `idProject` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `databases`
--

CREATE TABLE `databases` (
  `idDatabase` varchar(255) NOT NULL,
  `nameDatabase` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `devlanguageprojects`
--

CREATE TABLE `devlanguageprojects` (
  `idDevLanguageProject` varchar(255) NOT NULL,
  `idDevLanguage` varchar(255) NOT NULL,
  `idProject` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `devlanguages`
--

CREATE TABLE `devlanguages` (
  `idDevLanguage` varchar(255) NOT NULL,
  `nameDevLanguage` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `devtoolprojects`
--

CREATE TABLE `devtoolprojects` (
  `idDevToolProject` varchar(255) NOT NULL,
  `idDevTool` varchar(255) NOT NULL,
  `idProject` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `devtools`
--

CREATE TABLE `devtools` (
  `idDevTool` varchar(255) NOT NULL,
  `nameDevTool` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `education`
--

CREATE TABLE `education` (
  `idEducation` varchar(255) NOT NULL,
  `school` varchar(50) NOT NULL,
  `degree` varchar(25) NOT NULL,
  `subject` varchar(50) DEFAULT NULL,
  `priodFrom` date NOT NULL,
  `priodTo` date DEFAULT NULL,
  `idPerson` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `employeestatuses`
--

CREATE TABLE `employeestatuses` (
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `frameworkprojects`
--

CREATE TABLE `frameworkprojects` (
  `idFrameWorkProject` varchar(255) NOT NULL,
  `idFramework` varchar(255) NOT NULL,
  `idProject` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `frameworks`
--

CREATE TABLE `frameworks` (
  `idFramework` varchar(255) NOT NULL,
  `nameFramework` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `gendres`
--

CREATE TABLE `gendres` (
  `idGendre` varchar(255) NOT NULL,
  `nameGendre` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gendres`
--

INSERT INTO `gendres` (`idGendre`, `nameGendre`) VALUES
('GEN-20d346e8-4499-46f5-8505-927de59b6fe8', 'smale'),
('GEN-631cfae2-d592-408e-9675-4d034ef2f000', 'Female'),
('GEN-83ad3741-2700-4408-b2ba-0a2f3bfad318', 'Male'),
('GEN-91aa415e-a2fa-4f37-9403-4d477d18167b', 'Fameles'),
('GEN-9e336748-84f6-475d-bb0b-71931821a9c4', 'okoko'),
('GEN-c04cd550-84ce-459e-9a44-45ab29eee56e', 'okoko');

-- --------------------------------------------------------

--
-- Table structure for table `health`
--

CREATE TABLE `health` (
  `idHealth` varchar(255) NOT NULL,
  `nameHealth` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `health`
--

INSERT INTO `health` (`idHealth`, `nameHealth`) VALUES
('HEA-113a20ea-712a-4e07-b292-6f1232bc61aa', 'Good'),
('HEA-e960682f-76ce-470d-bbae-bec536604ccc', 'Bad');

-- --------------------------------------------------------

--
-- Table structure for table `languages`
--

CREATE TABLE `languages` (
  `idLanguage` varchar(255) NOT NULL,
  `language` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `languages`
--

INSERT INTO `languages` (`idLanguage`, `language`) VALUES
('LAN-78e5e4b1-ee62-4375-9772-bbde8e8d65b0', 'Indonesia'),
('LAN-8187b633-7b5c-4888-b0cb-c135a6dd1527', 'English');

-- --------------------------------------------------------

--
-- Table structure for table `languageskills`
--

CREATE TABLE `languageskills` (
  `idLanguageSkill` varchar(255) NOT NULL,
  `idLanguage` varchar(255) NOT NULL,
  `idLevel` varchar(255) NOT NULL,
  `idPerson` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `languageskills`
--

INSERT INTO `languageskills` (`idLanguageSkill`, `idLanguage`, `idLevel`, `idPerson`) VALUES
('LAS-1c4bb967-fc9a-493c-937d-b36819301c31', 'LAN-8187b633-7b5c-4888-b0cb-c135a6dd1527', 'LEV-b452b530-04e3-435c-ad87-e43a8d0dab6b', 'PER-6c202b52-3fb0-4593-b4bd-05eee56eb77d'),
('LAS-92e89f64-29a8-48a7-9bf0-66c3010143fb', 'LAN-78e5e4b1-ee62-4375-9772-bbde8e8d65b0', 'LEV-848fe12b-ddd1-4549-8f87-def6e90439df', 'PER-6c202b52-3fb0-4593-b4bd-05eee56eb77d');

-- --------------------------------------------------------

--
-- Table structure for table `levels`
--

CREATE TABLE `levels` (
  `idLevel` varchar(255) NOT NULL,
  `nameLevel` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `levels`
--

INSERT INTO `levels` (`idLevel`, `nameLevel`) VALUES
('LEV-848fe12b-ddd1-4549-8f87-def6e90439df', 'Good'),
('LEV-b452b530-04e3-435c-ad87-e43a8d0dab6b', 'Medium'),
('LEV-df740dab-c44d-4e4b-8bfe-47084ebc60c3', 'Bad');

-- --------------------------------------------------------

--
-- Table structure for table `objectives`
--

CREATE TABLE `objectives` (
  `idObjective` varchar(255) NOT NULL,
  `descObjective` varchar(255) NOT NULL,
  `idPerson` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `objectives`
--

INSERT INTO `objectives` (`idObjective`, `descObjective`, `idPerson`) VALUES
('OBJ-75917822-f3c2-4137-a698-656c181bd30c', 'A position as Senior Programmer', 'PER-6c202b52-3fb0-4593-b4bd-05eee56eb77d'),
('OBJ-80b81458-1ef8-4655-ae02-f7eff7fc50a0', 'A position as Lead Project', 'PER-6c202b52-3fb0-4593-b4bd-05eee56eb77d');

-- --------------------------------------------------------

--
-- Table structure for table `people`
--

CREATE TABLE `people` (
  `idPerson` varchar(255) NOT NULL,
  `namePerson` varchar(25) NOT NULL,
  `birthPlace` varchar(25) DEFAULT NULL,
  `birthDate` date DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `idGendre` varchar(255) NOT NULL,
  `idHealth` varchar(255) NOT NULL,
  `idReligion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `people`
--

INSERT INTO `people` (`idPerson`, `namePerson`, `birthPlace`, `birthDate`, `email`, `password`, `idGendre`, `idHealth`, `idReligion`) VALUES
('PER-4c431f5c-fe2e-4ccb-9a3f-f76f87d40b75', 'Andhika', 'Bandung', '1989-03-05', 'andhika@gmail.com', '12345', 'GEN-83ad3741-2700-4408-b2ba-0a2f3bfad318', 'HEA-113a20ea-712a-4e07-b292-6f1232bc61aa', 'REL-ac8c0d9b-cb0f-4885-8019-731aee8aaa32'),
('PER-6c202b52-3fb0-4593-b4bd-05eee56eb77d', 'Yuda Permana', 'Bandung', '1989-03-05', 'yudapermana@gmail.com', '12345', 'GEN-83ad3741-2700-4408-b2ba-0a2f3bfad318', 'HEA-113a20ea-712a-4e07-b292-6f1232bc61aa', 'REL-ac8c0d9b-cb0f-4885-8019-731aee8aaa32');

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

CREATE TABLE `profiles` (
  `idProfile` varchar(255) NOT NULL,
  `descProfile` varchar(255) NOT NULL,
  `idPerson` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `profiles`
--

INSERT INTO `profiles` (`idProfile`, `descProfile`, `idPerson`) VALUES
('PRO-ee93e04e-217d-4ed3-b64d-0452475972c5', '•	Almost 9 year experience as professional IT Programmer, Tester, and Facilitator.\n•	Goal-oriented individual with good analytic thinking, fast leaner, result oriented.\n•	Enthusiastic team player and strive to contribute best practice, standards compliant', 'PER-6c202b52-3fb0-4593-b4bd-05eee56eb77d');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `idProject` varchar(255) NOT NULL,
  `nameProject` varchar(50) NOT NULL,
  `priodFrom` date NOT NULL,
  `priodTo` date DEFAULT NULL,
  `descProject` varchar(200) DEFAULT NULL,
  `technicalInfo` varchar(200) DEFAULT NULL,
  `totherInfo` varchar(200) DEFAULT NULL,
  `idCustomer` varchar(255) NOT NULL,
  `idPerson` varchar(255) NOT NULL,
  `idRole` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `relevanexperiences`
--

CREATE TABLE `relevanexperiences` (
  `idRelevanExperience` varchar(255) NOT NULL,
  `descRelevanExperience` varchar(255) DEFAULT NULL,
  `idCompany` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `religions`
--

CREATE TABLE `religions` (
  `idReligion` varchar(255) NOT NULL,
  `nameReligion` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `religions`
--

INSERT INTO `religions` (`idReligion`, `nameReligion`) VALUES
('REL-3c34da47-6d92-45cf-bf6a-1cf487b5fad8', 'Hindu'),
('REL-6b29320f-4c7b-494c-81c0-710d8cb489f3', 'Protestan'),
('REL-6ed360f5-59f2-4cba-9f13-e696a93a7e67', 'Katolik'),
('REL-ac8c0d9b-cb0f-4885-8019-731aee8aaa32', 'Islam'),
('REL-b21b1968-bfa4-44f0-9bdc-c33e78a9e696', 'Budha'),
('REL-dff8795b-ecdc-4c48-a264-05b93835472d', 'Konghucu');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `idRole` varchar(255) NOT NULL,
  `nameRole` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `serveros`
--

CREATE TABLE `serveros` (
  `idServerOs` varchar(255) NOT NULL,
  `nameServerOs` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `serverosprojects`
--

CREATE TABLE `serverosprojects` (
  `idServerOsProject` varchar(255) NOT NULL,
  `idProject` varchar(255) NOT NULL,
  `idServerOs` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `trainings`
--

CREATE TABLE `trainings` (
  `idTraining` varchar(255) NOT NULL,
  `titleTraining` varchar(100) NOT NULL,
  `providerTraining` varchar(100) NOT NULL,
  `placeTraining` varchar(50) DEFAULT NULL,
  `dateTraining` date NOT NULL,
  `durationTraining` int(11) NOT NULL,
  `certificateTraining` varchar(10) DEFAULT NULL,
  `idPerson` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appserverprojects`
--
ALTER TABLE `appserverprojects`
  ADD PRIMARY KEY (`idAppServerProject`),
  ADD KEY `idAppServer` (`idAppServer`),
  ADD KEY `idProject` (`idProject`);

--
-- Indexes for table `appservers`
--
ALTER TABLE `appservers`
  ADD PRIMARY KEY (`idAppServer`);

--
-- Indexes for table `apptypeprojects`
--
ALTER TABLE `apptypeprojects`
  ADD PRIMARY KEY (`idAppTypeProject`),
  ADD KEY `idAppType` (`idAppType`),
  ADD KEY `idProject` (`idProject`);

--
-- Indexes for table `apptypes`
--
ALTER TABLE `apptypes`
  ADD PRIMARY KEY (`idAppType`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`idCompany`),
  ADD KEY `status` (`status`),
  ADD KEY `idPerson` (`idPerson`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`idCourse`),
  ADD KEY `idPerson` (`idPerson`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`idCustomer`);

--
-- Indexes for table `databaseprojects`
--
ALTER TABLE `databaseprojects`
  ADD PRIMARY KEY (`idDatabaseProject`),
  ADD KEY `idDatabase` (`idDatabase`),
  ADD KEY `idProject` (`idProject`);

--
-- Indexes for table `databases`
--
ALTER TABLE `databases`
  ADD PRIMARY KEY (`idDatabase`);

--
-- Indexes for table `devlanguageprojects`
--
ALTER TABLE `devlanguageprojects`
  ADD PRIMARY KEY (`idDevLanguageProject`),
  ADD KEY `idDevLanguage` (`idDevLanguage`),
  ADD KEY `idProject` (`idProject`);

--
-- Indexes for table `devlanguages`
--
ALTER TABLE `devlanguages`
  ADD PRIMARY KEY (`idDevLanguage`);

--
-- Indexes for table `devtoolprojects`
--
ALTER TABLE `devtoolprojects`
  ADD PRIMARY KEY (`idDevToolProject`),
  ADD KEY `idDevTool` (`idDevTool`),
  ADD KEY `idProject` (`idProject`);

--
-- Indexes for table `devtools`
--
ALTER TABLE `devtools`
  ADD PRIMARY KEY (`idDevTool`);

--
-- Indexes for table `education`
--
ALTER TABLE `education`
  ADD PRIMARY KEY (`idEducation`),
  ADD KEY `idPerson` (`idPerson`);

--
-- Indexes for table `employeestatuses`
--
ALTER TABLE `employeestatuses`
  ADD PRIMARY KEY (`status`);

--
-- Indexes for table `frameworkprojects`
--
ALTER TABLE `frameworkprojects`
  ADD PRIMARY KEY (`idFrameWorkProject`),
  ADD KEY `idFramework` (`idFramework`),
  ADD KEY `idProject` (`idProject`);

--
-- Indexes for table `frameworks`
--
ALTER TABLE `frameworks`
  ADD PRIMARY KEY (`idFramework`);

--
-- Indexes for table `gendres`
--
ALTER TABLE `gendres`
  ADD PRIMARY KEY (`idGendre`);

--
-- Indexes for table `health`
--
ALTER TABLE `health`
  ADD PRIMARY KEY (`idHealth`);

--
-- Indexes for table `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`idLanguage`);

--
-- Indexes for table `languageskills`
--
ALTER TABLE `languageskills`
  ADD PRIMARY KEY (`idLanguageSkill`),
  ADD KEY `idLanguage` (`idLanguage`),
  ADD KEY `idLevel` (`idLevel`),
  ADD KEY `idPerson` (`idPerson`);

--
-- Indexes for table `levels`
--
ALTER TABLE `levels`
  ADD PRIMARY KEY (`idLevel`);

--
-- Indexes for table `objectives`
--
ALTER TABLE `objectives`
  ADD PRIMARY KEY (`idObjective`),
  ADD KEY `idPerson` (`idPerson`);

--
-- Indexes for table `people`
--
ALTER TABLE `people`
  ADD PRIMARY KEY (`idPerson`),
  ADD KEY `idGendre` (`idGendre`),
  ADD KEY `idHealth` (`idHealth`),
  ADD KEY `idReligion` (`idReligion`);

--
-- Indexes for table `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`idProfile`),
  ADD KEY `idPerson` (`idPerson`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`idProject`),
  ADD KEY `idCustomer` (`idCustomer`),
  ADD KEY `idPerson` (`idPerson`),
  ADD KEY `idRole` (`idRole`);

--
-- Indexes for table `relevanexperiences`
--
ALTER TABLE `relevanexperiences`
  ADD PRIMARY KEY (`idRelevanExperience`),
  ADD KEY `idCompany` (`idCompany`);

--
-- Indexes for table `religions`
--
ALTER TABLE `religions`
  ADD PRIMARY KEY (`idReligion`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`idRole`);

--
-- Indexes for table `serveros`
--
ALTER TABLE `serveros`
  ADD PRIMARY KEY (`idServerOs`);

--
-- Indexes for table `serverosprojects`
--
ALTER TABLE `serverosprojects`
  ADD PRIMARY KEY (`idServerOsProject`),
  ADD KEY `idProject` (`idProject`),
  ADD KEY `idServerOs` (`idServerOs`);

--
-- Indexes for table `trainings`
--
ALTER TABLE `trainings`
  ADD PRIMARY KEY (`idTraining`),
  ADD KEY `idPerson` (`idPerson`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appserverprojects`
--
ALTER TABLE `appserverprojects`
  ADD CONSTRAINT `appserverprojects_ibfk_1` FOREIGN KEY (`idAppServer`) REFERENCES `appservers` (`idAppServer`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `appserverprojects_ibfk_2` FOREIGN KEY (`idProject`) REFERENCES `projects` (`idProject`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `apptypeprojects`
--
ALTER TABLE `apptypeprojects`
  ADD CONSTRAINT `apptypeprojects_ibfk_1` FOREIGN KEY (`idAppType`) REFERENCES `apptypes` (`idAppType`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `apptypeprojects_ibfk_2` FOREIGN KEY (`idProject`) REFERENCES `projects` (`idProject`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `companies`
--
ALTER TABLE `companies`
  ADD CONSTRAINT `companies_ibfk_1` FOREIGN KEY (`status`) REFERENCES `employeestatuses` (`status`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `companies_ibfk_2` FOREIGN KEY (`idPerson`) REFERENCES `people` (`idPerson`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `courses_ibfk_1` FOREIGN KEY (`idPerson`) REFERENCES `people` (`idPerson`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `databaseprojects`
--
ALTER TABLE `databaseprojects`
  ADD CONSTRAINT `databaseprojects_ibfk_1` FOREIGN KEY (`idDatabase`) REFERENCES `databases` (`idDatabase`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `databaseprojects_ibfk_2` FOREIGN KEY (`idProject`) REFERENCES `projects` (`idProject`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `devlanguageprojects`
--
ALTER TABLE `devlanguageprojects`
  ADD CONSTRAINT `devlanguageprojects_ibfk_1` FOREIGN KEY (`idDevLanguage`) REFERENCES `devlanguages` (`idDevLanguage`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `devlanguageprojects_ibfk_2` FOREIGN KEY (`idProject`) REFERENCES `projects` (`idProject`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `devtoolprojects`
--
ALTER TABLE `devtoolprojects`
  ADD CONSTRAINT `devtoolprojects_ibfk_1` FOREIGN KEY (`idDevTool`) REFERENCES `devtools` (`idDevTool`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `devtoolprojects_ibfk_2` FOREIGN KEY (`idProject`) REFERENCES `projects` (`idProject`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `education`
--
ALTER TABLE `education`
  ADD CONSTRAINT `education_ibfk_1` FOREIGN KEY (`idPerson`) REFERENCES `people` (`idPerson`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `frameworkprojects`
--
ALTER TABLE `frameworkprojects`
  ADD CONSTRAINT `frameworkprojects_ibfk_1` FOREIGN KEY (`idFramework`) REFERENCES `frameworks` (`idFramework`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `frameworkprojects_ibfk_2` FOREIGN KEY (`idProject`) REFERENCES `projects` (`idProject`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `languageskills`
--
ALTER TABLE `languageskills`
  ADD CONSTRAINT `languageskills_ibfk_1` FOREIGN KEY (`idLanguage`) REFERENCES `languages` (`idLanguage`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `languageskills_ibfk_2` FOREIGN KEY (`idLevel`) REFERENCES `levels` (`idLevel`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `languageskills_ibfk_3` FOREIGN KEY (`idPerson`) REFERENCES `people` (`idPerson`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `objectives`
--
ALTER TABLE `objectives`
  ADD CONSTRAINT `objectives_ibfk_1` FOREIGN KEY (`idPerson`) REFERENCES `people` (`idPerson`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `people`
--
ALTER TABLE `people`
  ADD CONSTRAINT `people_ibfk_1` FOREIGN KEY (`idGendre`) REFERENCES `gendres` (`idGendre`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `people_ibfk_2` FOREIGN KEY (`idHealth`) REFERENCES `health` (`idHealth`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `people_ibfk_3` FOREIGN KEY (`idReligion`) REFERENCES `religions` (`idReligion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `profiles`
--
ALTER TABLE `profiles`
  ADD CONSTRAINT `profiles_ibfk_1` FOREIGN KEY (`idPerson`) REFERENCES `people` (`idPerson`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `projects`
--
ALTER TABLE `projects`
  ADD CONSTRAINT `projects_ibfk_1` FOREIGN KEY (`idCustomer`) REFERENCES `customers` (`idCustomer`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `projects_ibfk_2` FOREIGN KEY (`idPerson`) REFERENCES `people` (`idPerson`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `projects_ibfk_3` FOREIGN KEY (`idRole`) REFERENCES `roles` (`idRole`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `relevanexperiences`
--
ALTER TABLE `relevanexperiences`
  ADD CONSTRAINT `relevanexperiences_ibfk_1` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`idCompany`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `serverosprojects`
--
ALTER TABLE `serverosprojects`
  ADD CONSTRAINT `serverosprojects_ibfk_1` FOREIGN KEY (`idProject`) REFERENCES `projects` (`idProject`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `serverosprojects_ibfk_2` FOREIGN KEY (`idServerOs`) REFERENCES `serveros` (`idServerOs`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `trainings`
--
ALTER TABLE `trainings`
  ADD CONSTRAINT `trainings_ibfk_1` FOREIGN KEY (`idPerson`) REFERENCES `people` (`idPerson`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
