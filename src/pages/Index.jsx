import { useState } from "react";
import { Container, VStack, HStack, Text, Input, Button, Box, IconButton, Image, FormControl, FormLabel, Select, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { FaUser, FaLock, FaSignInAlt, FaUserPlus, FaChartBar, FaBriefcase, FaGift, FaCog, FaSignOutAlt } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEmployer, setIsEmployer] = useState(true); // Toggle between employer and employee views
  const [view, setView] = useState("dashboard"); // Default view

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setView("dashboard");
  };

  const renderLogin = () => (
    <VStack spacing={4} width="100%">
      <HStack spacing={2} width="100%">
        <FaUser />
        <Input placeholder="Username" />
      </HStack>
      <HStack spacing={2} width="100%">
        <FaLock />
        <Input placeholder="Password" type="password" />
      </HStack>
      <Button leftIcon={<FaSignInAlt />} colorScheme="teal" onClick={handleLogin}>
        Login
      </Button>
      <Button leftIcon={<FaUserPlus />} colorScheme="gray">
        Signup
      </Button>
    </VStack>
  );

  const renderEmployerDashboard = () => (
    <VStack spacing={4} width="100%">
      <HStack spacing={4}>
        <IconButton aria-label="Dashboard" icon={<FaChartBar />} onClick={() => setView("dashboard")} />
        <IconButton aria-label="Benefits Management" icon={<FaBriefcase />} onClick={() => setView("benefits")} />
        <IconButton aria-label="Employee Management" icon={<FaUser />} onClick={() => setView("employees")} />
        <IconButton aria-label="Perks & Discounts" icon={<FaGift />} onClick={() => setView("perks")} />
        <IconButton aria-label="Settings" icon={<FaCog />} onClick={() => setView("settings")} />
        <IconButton aria-label="Logout" icon={<FaSignOutAlt />} onClick={handleLogout} />
      </HStack>
      {view === "dashboard" && <Text fontSize="2xl">Employer Dashboard</Text>}
      {view === "benefits" && renderBenefitsManagement()}
      {view === "employees" && renderEmployeeManagement()}
      {view === "perks" && <Text fontSize="2xl">Perks & Discounts</Text>}
      {view === "settings" && <Text fontSize="2xl">Profile Settings</Text>}
    </VStack>
  );

  const renderEmployeeDashboard = () => (
    <VStack spacing={4} width="100%">
      <HStack spacing={4}>
        <IconButton aria-label="Dashboard" icon={<FaChartBar />} onClick={() => setView("dashboard")} />
        <IconButton aria-label="Perks & Discounts" icon={<FaGift />} onClick={() => setView("perks")} />
        <IconButton aria-label="Settings" icon={<FaCog />} onClick={() => setView("settings")} />
        <IconButton aria-label="Logout" icon={<FaSignOutAlt />} onClick={handleLogout} />
      </HStack>
      {view === "dashboard" && <Text fontSize="2xl">Employee Dashboard</Text>}
      {view === "perks" && <Text fontSize="2xl">Perks & Discounts</Text>}
      {view === "settings" && <Text fontSize="2xl">Profile Settings</Text>}
    </VStack>
  );

  const renderBenefitsManagement = () => (
    <VStack spacing={4} width="100%">
      <Text fontSize="2xl">Benefits Management</Text>
      <FormControl>
        <FormLabel>Benefit Type</FormLabel>
        <Select placeholder="Select benefit type">
          <option>Health Insurance</option>
          <option>Retirement Plan</option>
          <option>Paid Time Off</option>
        </Select>
      </FormControl>
      <Button colorScheme="teal">Add Benefit</Button>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Benefit</Th>
            <Th>Type</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Health Insurance</Td>
            <Td>Insurance</Td>
            <Td>
              <Button colorScheme="red">Remove</Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </VStack>
  );

  const renderEmployeeManagement = () => (
    <VStack spacing={4} width="100%">
      <Text fontSize="2xl">Employee Management</Text>
      <FormControl>
        <FormLabel>Employee Name</FormLabel>
        <Input placeholder="Enter employee name" />
      </FormControl>
      <Button colorScheme="teal">Add Employee</Button>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Position</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>John Doe</Td>
            <Td>Software Engineer</Td>
            <Td>
              <Button colorScheme="red">Remove</Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </VStack>
  );

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      {isLoggedIn ? (isEmployer ? renderEmployerDashboard() : renderEmployeeDashboard()) : renderLogin()}
    </Container>
  );
};

export default Index;
