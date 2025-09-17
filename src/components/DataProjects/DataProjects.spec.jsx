import { render, screen, waitFor } from "@testing-library/react";
import { DataProjects } from ".";
import db from "../../assets/database/config/index";

const projects = [
    {
        nomeEN: "Project 1",
        nomePT: "Projeto 1",
        link: "http://project1.com",
        linkImage: "http://project1.com/image",
    },
    {
        nomeEN: "Project 2",
        nomePT: "Projeto 2",
        link: "http://project2.com",
        linkImage: "http://project2.com/image",
    },
];


describe("DataProjects", () => {
    it("should render the DataProjects", () => {
        render(<DataProjects />);
        const dataProjects = screen.getByTestId("data-projects");
        expect(dataProjects).toBeInTheDocument();
    });

    it("should fetch projects", async () => {

        const getDocs = jest.fn(() => ({
            docs: projects.map((project) => ({
                data: () => project,
            })),
        }));

        const collection = jest.fn(() => ({
            getDocs,
        }));

        const dbMock = {
            collection,
        };

        jest.spyOn(db, "collection").mockImplementation(dbMock.collection);

        render(<DataProjects />);
        await waitFor(() => {
            expect(screen.getAllByTestId("listitem")).toHaveLength(2);
        });
    });

    it("should render the correct data", async () => {
        const getDocs = jest.fn(() => ({
            docs: projects.map((project) => ({
                data: () => project,
            })),
        }));

        const collection = jest.fn(() => ({
            getDocs,
        }));

        const dbMock = {
            collection,
        };

        jest.spyOn(db, "collection").mockImplementation(dbMock.collection);

        render(<DataProjects />);
        await waitFor(() => {
            expect(screen.getByText("Project 1")).toBeInTheDocument();
            // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
            expect(screen.getByText("Project 2")).toBeInTheDocument();
        });
    });

    
});